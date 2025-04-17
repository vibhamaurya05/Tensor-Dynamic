import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChartContainer } from "@/components/ui/chart";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';
import {
  BarChart as BarChartIcon,
  LineChart as LineChartIcon,
  PieChart as PieChartIcon,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  Eye as EyeIcon,
  MousePointerClick,
  Clock,
  Calendar,
  RefreshCw,
  MoveUpRight,
  ListFilter,
  FileText,
  Mail,
  BarChart3,
  Globe,
  Smartphone,
  Laptop,
  Tablet as TabletIcon,
} from "lucide-react";
// import { Bar, Line, Pie } from "recharts";

interface AnalyticsData {
  totalVisitors: number;
  pageViews: number;
  avgSessionTime: string;
  bounceRate: number;
  deviceStats: {
    desktop: number;
    mobile: number;
    tablet: number;
  };
  trafficData: any[];
  topPages: any[];
  visitorGrowth: number;
  pageViewGrowth: number;
  sessionGrowth: number;
  bounceRateChange: number;
}

export const Overview = () => {
  const [loading, setLoading] = useState(false);
  const [timeRange, setTimeRange] = useState("7d");
  const { toast } = useToast();
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    totalVisitors: 0,
    pageViews: 0,
    avgSessionTime: "0m 0s",
    bounceRate: 0,
    deviceStats: {
      desktop: 0,
      mobile: 0,
      tablet: 0
    },
    trafficData: [],
    topPages: [],
    visitorGrowth: 0,
    pageViewGrowth: 0,
    sessionGrowth: 0,
    bounceRateChange: 0
  });



  const [totalUsers, setTotalUsers] = useState(0);
  const [pageViews, setPageViews] = useState(0);
  const [avgSession, setAvgSession] = useState("0m 0s");
  const [bounceRate, setBounceRate] = useState("0%");

  
    
  
  useEffect(() => {
    const fetchAnalytics = async () => {
      setLoading(true);
      try {
        const startDate = getDateRange(timeRange);
        
        // Fetch analytics data
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .gte('created_at', startDate)
          .order('created_at', { ascending: true });

        if (error) throw error;

        // Process analytics data
        const processedData = processAnalyticsData(data || []);
        setAnalyticsData(processedData);
      } catch (error: any) {
        toast({
          title: "Error fetching analytics",
          description: error.message,
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, [timeRange]);
  

  // Sample data for charts
  const visitorsData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Visitors",
        data: [],
        backgroundColor: "rgba(29, 78, 216, 0.8)",
      },
    ],
  };
  const getDateRange = (range: string): string => {
    const now = new Date();
    switch (range) {
      case "7d":
        return new Date(now.setDate(now.getDate() - 7)).toISOString();
      case "30d":
        return new Date(now.setDate(now.getDate() - 30)).toISOString();
      case "90d":
        return new Date(now.setDate(now.getDate() - 90)).toISOString();
      default:
        return new Date(now.setDate(now.getDate() - 7)).toISOString();
    }
  };

  const processAnalyticsData = (data: any[]): AnalyticsData => {
    if (!data.length) {
      return {
        totalVisitors: 0,
        pageViews: 0,
        avgSessionTime: "0m 0s",
        bounceRate: 0,
        deviceStats: { desktop: 0, mobile: 0, tablet: 0 },
        trafficData: [],
        topPages: [],
        visitorGrowth: 0,
        pageViewGrowth: 0,
        sessionGrowth: 0,
        bounceRateChange: 0
      };
    }

    // Calculate total metrics
    const totalVisitors = data.reduce((sum, record) => sum + (record.visitors || 0), 0);
    const pageViews = data.reduce((sum, record) => sum + (record.page_views || 0), 0);
    const avgSessionDuration = data.reduce((sum, record) => sum + (record.avg_session_duration || 0), 0) / data.length;
    const bounceRate = data.reduce((sum, record) => sum + (record.bounce_rate || 0), 0) / data.length;

    // Calculate device stats
    const devices = data.reduce((acc, record) => {
      acc.desktop += record.desktop_users || 0;
      acc.mobile += record.mobile_users || 0;
      acc.tablet += record.tablet_users || 0;
      return acc;
    }, { desktop: 0, mobile: 0, tablet: 0 });

    // Format traffic data for charts
    const trafficData = data.map(record => ({
      date: new Date(record.created_at).toLocaleDateString(),
      visitors: record.visitors || 0,
      pageViews: record.page_views || 0
    }));

    // Process top pages
    const topPages = data
      .reduce((acc: any[], record) => {
        if (record.page_url && record.page_views) {
          const existing = acc.find(p => p.url === record.page_url);
          if (existing) {
            existing.views += record.page_views;
          } else {
            acc.push({ url: record.page_url, views: record.page_views });
          }
        }
        return acc;
      }, [])
      .sort((a, b) => b.views - a.views)
      .slice(0, 5);

    // Calculate growth rates
    const previousPeriodData = data.slice(0, Math.floor(data.length / 2));
    const currentPeriodData = data.slice(Math.floor(data.length / 2));

    const calculateGrowth = (current: number, previous: number) => {
      return previous === 0 ? 0 : ((current - previous) / previous) * 100;
    };

    const visitorGrowth = calculateGrowth(
      currentPeriodData.reduce((sum, record) => sum + (record.visitors || 0), 0),
      previousPeriodData.reduce((sum, record) => sum + (record.visitors || 0), 0)
    );

    const pageViewGrowth = calculateGrowth(
      currentPeriodData.reduce((sum, record) => sum + (record.page_views || 0), 0),
      previousPeriodData.reduce((sum, record) => sum + (record.page_views || 0), 0)
    );

    return {
      totalVisitors,
      pageViews,
      avgSessionTime: formatDuration(avgSessionDuration),
      bounceRate,
      deviceStats: devices,
      trafficData,
      topPages,
      visitorGrowth,
      pageViewGrowth,
      sessionGrowth: 0, // Calculate based on your needs
      bounceRateChange: 0 // Calculate based on your needs
    };
  };

  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}m ${remainingSeconds}s`;
  };

  // Your existing JSX with updated data bindings
//   return (
//     <div className="space-y-6">
    
//       <div className="flex items-center justify-between">

//         <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
//         <div className="flex gap-2">
//           <Button variant="outline" size="sm" onClick={() => setTimeRange("7d")}>
//             7 Days
//           </Button>
//           <Button variant="outline" size="sm" onClick={() => setTimeRange("30d")}>
//             30 Days
//           </Button>
//           <Button variant="outline" size="sm" onClick={() => setTimeRange("90d")}>
//             90 Days
//           </Button>
//         </div>
      

//       {/* KPI Overview */}
//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//         {/* Total Users */}
//         <Card>
//           <CardContent className="p-6">
//             <div className="flex items-center justify-between space-y-0 pb-2">
//               <p className="text-sm font-medium">Total Users</p>
//               <Badge 
//                 variant="outline" 
//                 className={`${analyticsData.visitorGrowth >= 0 ? 'bg-blue-50 text-blue-700' : 'bg-red-50 text-red-700'} hover:bg-blue-50`}
//               >
//                 {analyticsData.visitorGrowth >= 0 ? <ArrowUpRight className="mr-1 h-3 w-3" /> : <ArrowDownRight className="mr-1 h-3 w-3" />}
//                 {Math.abs(analyticsData.visitorGrowth).toFixed(1)}%
//               </Badge>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Users className="h-5 w-5 text-muted-foreground" />
//               <div className="flex items-baseline space-x-2">
//                 <h4 className="text-2xl font-bold tracking-tight">
//                   {loading ? "..." : analyticsData.totalVisitors.toLocaleString()}
//                 </h4>
//                 <p className="text-xs text-muted-foreground">users</p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Page Views */}
//         <Card>
//           <CardContent className="p-6">
//             <div className="flex items-center justify-between space-y-0 pb-2">
//               <p className="text-sm font-medium">Page Views</p>
//               <Badge 
//                 variant="default" 
//                 className={`${analyticsData.pageViewGrowth >= 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'} hover:bg-green-50`}
//               >
//                 {analyticsData.pageViewGrowth >= 0 ? <ArrowUpRight className="mr-1 h-3 w-3" /> : <ArrowDownRight className="mr-1 h-3 w-3" />}
//                 {Math.abs(analyticsData.pageViewGrowth).toFixed(1)}%
//               </Badge>
//             </div>
//             <div className="flex items-center space-x-2">
//               <EyeIcon className="h-5 w-5 text-muted-foreground" />
//               <div className="flex items-baseline space-x-2">
//                 <h4 className="text-2xl font-bold tracking-tight">
//                   {loading ? "..." : analyticsData.pageViews.toLocaleString()}
//                 </h4>
//                 <p className="text-xs text-muted-foreground">views</p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Avg. Session */}
//         <Card>
//           <CardContent className="p-6">
//             <div className="flex items-center justify-between space-y-0 pb-2">
//               <p className="text-sm font-medium">Avg. Session</p>
//               <Badge 
//                 variant="default" 
//                 className={`${analyticsData.sessionGrowth >= 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'} hover:bg-green-50`}
//               >
//                 {analyticsData.sessionGrowth >= 0 ? <ArrowUpRight className="mr-1 h-3 w-3" /> : <ArrowDownRight className="mr-1 h-3 w-3" />}
//                 {Math.abs(analyticsData.sessionGrowth).toFixed(1)}%
//               </Badge>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Clock className="h-5 w-5 text-muted-foreground" />
//               <div className="flex items-baseline space-x-2">
//                 <h4 className="text-2xl font-bold tracking-tight">
//                   {loading ? "..." : analyticsData.avgSessionTime}
//                 </h4>
//                 <p className="text-xs text-muted-foreground">per session</p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Bounce Rate */}
//         <Card>
//           <CardContent className="p-6">
//             <div className="flex items-center justify-between space-y-0 pb-2">
//               <p className="text-sm font-medium">Bounce Rate</p>
//               <Badge 
//                 variant="default" 
//                 className={`${analyticsData.bounceRateChange <= 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'} hover:bg-red-50`}
//               >
//                 {analyticsData.bounceRateChange <= 0 ? <ArrowDownRight className="mr-1 h-3 w-3" /> : <ArrowUpRight className="mr-1 h-3 w-3" />}
//                 {Math.abs(analyticsData.bounceRateChange).toFixed(1)}%
//               </Badge>
//             </div>
//             <div className="flex items-center space-x-2">
//               <MoveUpRight className="h-5 w-5 text-muted-foreground" />
//               <div className="flex items-baseline space-x-2">
//                 <h4 className="text-2xl font-bold tracking-tight">
//                   {loading ? "..." : `${analyticsData.bounceRate.toFixed(1)}%`}
//                 </h4>
//                 <p className="text-xs text-muted-foreground">of visitors</p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Traffic Overview */}
//       <div className="grid gap-4 md:grid-cols-7">
//       // ... existing imports and component definition ...

// // Add this inside the Traffic Overview section
// <Card className="md:col-span-4">
//   <CardHeader>
//     <CardTitle>Visitor Traffic</CardTitle>
//     <CardDescription>Daily visitor count for the selected period</CardDescription>
//   </CardHeader>
//   <CardContent>
//     <div className="h-[300px] w-full">
//       {loading || !analyticsData.trafficData.length ? (
//         <div className="text-center text-muted-foreground py-16">
//           No visitor data available
//         </div>
//       ) : (
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={analyticsData.trafficData}>
//             <XAxis dataKey="date" />
//             <YAxis />
//             <Tooltip />
//             <Line
//               type="monotone"
//               dataKey="visitors"
//               stroke="rgba(29, 78, 216, 0.8)"
//               strokeWidth={2}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       )}
//     </div>
//   </CardContent>
// </Card>
// </div>

// {/* Update Device Usage card */}
// <Card className="md:col-span-3">
//   <CardHeader>
//     <CardTitle>Device Usage</CardTitle>
//     <CardDescription>Visitors by device type</CardDescription>
//   </CardHeader>
//   <CardContent>
//     <div className="h-[300px] w-full">
//       {loading || !Object.values(analyticsData.deviceStats).some(val => val > 0) ? (
//         <div className="text-center text-muted-foreground py-16">
//           No device data available
//         </div>
//       ) : (
//         <ResponsiveContainer width="100%" height="100%">
//           <PieChart>
//             <Pie
//               data={[
//                 { name: 'Desktop', value: analyticsData.deviceStats.desktop },
//                 { name: 'Mobile', value: analyticsData.deviceStats.mobile },
//                 { name: 'Tablet', value: analyticsData.deviceStats.tablet }
//               ]}
//               cx="50%"
//               cy="50%"
//               innerRadius={60}
//               outerRadius={80}
//               fill="#8884d8"
//               paddingAngle={5}
//               dataKey="value"
//             >
//               {analyticsData.deviceStats && Object.values(analyticsData.deviceStats).map((_, index) => (
//                 <Cell key={`cell-${index}`} fill={['#3b82f6', '#f97316', '#8b5cf6'][index]} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       )}
//     </div>
//   </CardContent>
// </Card>

// {/* Update Top Content section */}
// <Card className="md:col-span-3">
//   <CardHeader>
//     <CardTitle>Top Content</CardTitle>
//     <CardDescription>Most visited pages</CardDescription>
//   </CardHeader>
//   <CardContent className="space-y-8">
//     {loading || !analyticsData.topPages.length ? (
//       <div className="text-center text-muted-foreground py-10">
//         No data available
//       </div>
//     ) : (
//       analyticsData.topPages.map((page, index) => (
//         <div key={index} className="space-y-2">
//           <div className="flex items-center justify-between">
//             <p className="text-sm truncate" title={page.url}>{page.url}</p>
//             <Badge variant="outline">{page.views} views</Badge>
//           </div>
//           <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
//             <div
//               className="h-full bg-primary"
//               style={{
//                 width: `${(page.views / analyticsData.topPages[0].views) * 100}%`
//               }}
//             />
//           </div>
//         </div>
//       ))
//     )}
//   </CardContent>
// </Card>
// </div>
// </div>
//   );


return (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={() => setTimeRange("7d")}>
          7 Days
        </Button>
        <Button variant="outline" size="sm" onClick={() => setTimeRange("30d")}>
          30 Days
        </Button>
        <Button variant="outline" size="sm" onClick={() => setTimeRange("90d")}>
          90 Days
        </Button>
      </div>
    </div>

    {/* KPI Overview */}
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* Total Users */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <p className="text-sm font-medium">Total Users</p>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              {Math.abs(analyticsData.visitorGrowth).toFixed(1)}%
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-muted-foreground" />
            <div className="flex items-baseline space-x-2">
              <h4 className="text-2xl font-bold tracking-tight">
                {loading ? "..." : analyticsData.totalVisitors.toLocaleString()}
              </h4>
              <p className="text-xs text-muted-foreground">users</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Page Views */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <p className="text-sm font-medium">Page Views</p>
            <Badge variant="default" className="bg-green-50 text-green-700 hover:bg-green-50">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              {Math.abs(analyticsData.pageViewGrowth).toFixed(1)}%
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <EyeIcon className="h-5 w-5 text-muted-foreground" />
            <div className="flex items-baseline space-x-2">
              <h4 className="text-2xl font-bold tracking-tight">
                {loading ? "..." : analyticsData.pageViews.toLocaleString()}
              </h4>
              <p className="text-xs text-muted-foreground">views</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Avg. Session */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <p className="text-sm font-medium">Avg. Session</p>
            <Badge variant="default" className="bg-green-50 text-green-700 hover:bg-green-50">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              {Math.abs(analyticsData.sessionGrowth).toFixed(1)}%
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <div className="flex items-baseline space-x-2">
              <h4 className="text-2xl font-bold tracking-tight">
                {loading ? "..." : analyticsData.avgSessionTime}
              </h4>
              <p className="text-xs text-muted-foreground">per session</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bounce Rate */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <p className="text-sm font-medium">Bounce Rate</p>
            <Badge variant="default" className="bg-red-50 text-red-700 hover:bg-red-50">
              <ArrowDownRight className="mr-1 h-3 w-3" />
              {Math.abs(analyticsData.bounceRateChange).toFixed(1)}%
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <MoveUpRight className="h-5 w-5 text-muted-foreground" />
            <div className="flex items-baseline space-x-2">
              <h4 className="text-2xl font-bold tracking-tight">
                {loading ? "..." : `${analyticsData.bounceRate.toFixed(1)}%`}
              </h4>
              <p className="text-xs text-muted-foreground">of visitors</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    {/* Traffic Overview */}
    <div className="grid gap-4 md:grid-cols-7">
      <Card className="md:col-span-4">
        <CardHeader>
          <CardTitle>Visitor Traffic</CardTitle>
          <CardDescription>Daily visitor count for the selected period</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            {loading || !analyticsData.trafficData.length ? (
              <div className="text-center text-muted-foreground py-16">
                No visitor data available
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={analyticsData.trafficData}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="visitors" stroke="rgba(29, 78, 216, 0.8)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-3">
        <CardHeader>
          <CardTitle>Device Usage</CardTitle>
          <CardDescription>Visitors by device type</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            {loading || !Object.values(analyticsData.deviceStats).some(val => val > 0) ? (
              <div className="text-center text-muted-foreground py-16">
                No device data available
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Desktop', value: analyticsData.deviceStats.desktop },
                      { name: 'Mobile', value: analyticsData.deviceStats.mobile },
                      { name: 'Tablet', value: analyticsData.deviceStats.tablet }
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {analyticsData.deviceStats && Object.values(analyticsData.deviceStats).map((_, index) => (
                      <Cell key={`cell-${index}`} fill={['#3b82f6', '#f97316', '#8b5cf6'][index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </CardContent>
      </Card>
    </div>

    {/* Device Breakdown */}
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Device Breakdown</CardTitle>
          <CardDescription>Visitor device statistics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex items-center gap-2 w-[100px]">
                <Laptop className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Desktop</span>
              </div>
              <div className="ml-auto w-24 text-right text-sm">{analyticsData.deviceStats.desktop}%</div>
              <div className="ml-4 w-24">
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: `${analyticsData.deviceStats.desktop}%` }}></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="flex items-center gap-2 w-[100px]">
                <Smartphone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Mobile</span>
              </div>
              <div className="ml-auto w-24 text-right text-sm">{analyticsData.deviceStats.mobile}%</div>
              <div className="ml-4 w-24">
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-orange-500" style={{ width: `${analyticsData.deviceStats.mobile}%` }}></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="flex items-center gap-2 w-[100px]">
                <TabletIcon className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Tablet</span>
              </div>
              <div className="ml-auto w-24 text-right text-sm">{analyticsData.deviceStats.tablet}%</div>
              <div className="ml-4 w-24">
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-purple-500" style={{ width: `${analyticsData.deviceStats.tablet}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest user interactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {loading || !analyticsData.topPages.length ? (
              <div className="text-center text-muted-foreground py-10">
                No recent activity to display
              </div>
            ) : (
              analyticsData.topPages.map((page, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm truncate" title={page.url}>{page.url}</p>
                    <Badge variant="outline">{page.views} views</Badge>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${(page.views / analyticsData.topPages[0].views) * 100}%` }}
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

};