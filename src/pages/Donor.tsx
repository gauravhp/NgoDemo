import {
  Heart,
  TrendingUp,
  Calendar,
  Gift,
  Target,
  MapPin,
  ArrowRight,
  UserCheck,
  User,
  CreditCard,
  Ticket,
  Zap,
  Package,
  Check,
  Sparkles
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  mockDonorProfile,
  impactData,
  adoptAMomProfile
} from "@/mockData";

const Donor = () => {
  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Donor Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back, {mockDonorProfile.name}. See the impact of your generosity.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl border-gray-200">
            View History
          </Button>
          <Button className="bg-primary hover:bg-primary/90 rounded-xl shadow-lg shadow-primary/20">
            <Gift className="w-4 h-4 mr-2" />
            New Donation
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="rounded-2xl border-none shadow-sm bg-white overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Lifetime Giving
            </CardTitle>
            <div className="p-2 bg-primary/10 rounded-lg">
              <Gift className="w-4 h-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockDonorProfile.totalDonated.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-emerald-500 font-bold">+12.5%</span> from last period
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-none shadow-sm bg-white overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Impact Score
            </CardTitle>
            <div className="p-2 bg-blue-50 rounded-lg">
              <Target className="w-4 h-4 text-blue-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockDonorProfile.impactScore}/100</div>
            <p className="text-xs text-muted-foreground mt-1">
              Top 5% of all donors
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-none shadow-sm bg-white overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Next Recurring
            </CardTitle>
            <div className="p-2 bg-emerald-50 rounded-lg">
              <Calendar className="w-4 h-4 text-emerald-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockDonorProfile.recurringDonation.amount}</div>
            <p className="text-xs text-muted-foreground mt-1 uppercase">
              Processing on May 1st
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-none shadow-sm bg-white overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Moms Adopted
            </CardTitle>
            <div className="p-2 bg-amber-50 rounded-lg">
              <UserCheck className="w-4 h-4 text-amber-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground mt-1">
              Currently supporting Elena R.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Column */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="rounded-3xl border-none shadow-sm bg-white p-6">
            <CardHeader className="px-0 pt-0">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-bold">Impact Trajectory</CardTitle>
                  <CardDescription>Visualizing your community contribution score</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="rounded-full bg-emerald-50 text-emerald-700 border-emerald-100">
                    Growing Impact
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-0 pt-6">
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={impactData}>
                    <defs>
                      <linearGradient id="colorImpact" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#E27D60" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#E27D60" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 500}}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 500}}
                    />
                    <Tooltip
                      contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'}}
                    />
                    <Area
                      type="monotone"
                      dataKey="score"
                      stroke="#E27D60"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorImpact)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="bg-primary/5 rounded-[2rem] p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <TrendingUp className="w-48 h-48" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-primary mb-4">You're making a massive difference!</h2>
              <p className="text-gray-600 max-w-md mb-6 leading-relaxed">
                By maintaining your recurring donation, you've helped provide 240+ meals and 12 health checkups in the last 6 months.
              </p>
              <Button className="rounded-xl font-bold group">
                Download Impact Report
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="rounded-[2.5rem] border-none shadow-sm bg-white p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-amber-50 rounded-2xl">
                  <Zap className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Quick Donation</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">Support our mission with a one-time contribution of any amount.</p>
              
              <div className="space-y-4">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">$</span>
                  <input 
                    type="number" 
                    placeholder="Enter amount" 
                    className="w-full pl-8 pr-4 py-4 bg-gray-50 border-none rounded-2xl font-bold focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="rounded-2xl py-6 border-gray-100 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 font-bold transition-all">
                    PayPal
                  </Button>
                  <Button className="rounded-2xl py-6 bg-gray-900 hover:bg-black text-white font-bold shadow-lg shadow-gray-200">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Credit Card
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="rounded-[2.5rem] border-none shadow-sm bg-white p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-50 rounded-2xl">
                  <Ticket className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Event Tickets</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl group hover:bg-gray-100 transition-colors cursor-pointer">
                  <div>
                    <div className="font-bold text-gray-900">Annual Spring Gala</div>
                    <div className="text-xs text-muted-foreground uppercase font-black tracking-widest mt-0.5">May 15 &bull; $150</div>
                  </div>
                  <Button size="sm" className="rounded-xl font-bold bg-white text-gray-900 hover:bg-primary hover:text-white border border-gray-100 shadow-sm">
                    Buy
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl group hover:bg-gray-100 transition-colors cursor-pointer">
                  <div>
                    <div className="font-bold text-gray-900">Community Walkathon</div>
                    <div className="text-xs text-muted-foreground uppercase font-black tracking-widest mt-0.5">June 02 &bull; $25</div>
                  </div>
                  <Button size="sm" className="rounded-xl font-bold bg-white text-gray-900 hover:bg-primary hover:text-white border border-gray-100 shadow-sm">
                    Buy
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          <Card className="rounded-[2.5rem] border-none shadow-lg overflow-hidden bg-white group">
            <div className="relative h-32 bg-primary">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
              <Badge className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border-white/30 text-white font-bold">
                ADOPTED
              </Badge>
            </div>
            <CardContent className="px-8 pb-8 -mt-12 relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl bg-gray-50 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <User className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Supported Family</h3>
                <div className="flex items-center text-muted-foreground text-sm mt-1">
                  <MapPin className="w-3 h-3 mr-1" />
                  {adoptAMomProfile.location}
                </div>
                
                <div className="w-full h-px bg-gray-100 my-6"></div>
                
                <div className="w-full space-y-2 mb-6 text-left">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-500">
                    <span>Pregnancy Progress</span>
                    <span>{adoptAMomProfile.stage.includes('Week') ? adoptAMomProfile.stage.match(/Week (\d+)/)?.[1] + '/40 Weeks' : '80%'}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary" 
                      style={{ width: `${(Number(adoptAMomProfile.stage.match(/Week (\d+)/)?.[1] || 32) / 40) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="w-full space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground font-medium">Stage</span>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-none font-bold">
                      {adoptAMomProfile.stage.split('(')[0]}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground font-medium">Due Date</span>
                    <span className="font-bold text-gray-900">{adoptAMomProfile.dueDate}</span>
                  </div>
                </div>

                <div className="w-full h-px bg-gray-100 my-6"></div>

                <div className="w-full text-left">
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
                    Recent Support Provided
                  </h4>
                  <div className="space-y-3">
                    {adoptAMomProfile.recentSupport?.map((item) => (
                      <div key={item.id} className="flex items-start gap-3 group/item">
                        <div className={`mt-0.5 p-1 rounded-md transition-colors ${
                          item.type === 'product' ? 'bg-emerald-50 text-emerald-600 group-hover/item:bg-emerald-100' :
                          item.type === 'course' ? 'bg-blue-50 text-blue-600 group-hover/item:bg-blue-100' : 'bg-amber-50 text-amber-600 group-hover/item:bg-amber-100'
                        }`}>
                          <Package className="w-3 h-3" />
                        </div>
                        <div className="text-sm font-medium text-gray-700">
                          <span className="font-black text-gray-900">Provided: </span>
                          {item.item}
                          <div className="text-[10px] text-muted-foreground mt-0.5 uppercase font-bold tracking-tight">
                            {item.date}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full mt-8 rounded-2xl bg-gray-900 hover:bg-black text-white py-6 shadow-xl shadow-gray-200">
                  Send a Message
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2.5rem] border-none shadow-lg bg-gray-900 text-white p-8 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <Sparkles className="w-32 h-32" />
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 rounded-2xl">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Adopt Another Mom</h3>
              </div>
              
              <p className="text-sm text-gray-400">
                Choose a package. Our team will assign a family in need based on your selection.
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group/item">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-white">Essential Care</span>
                    <span className="text-primary font-black">$50/mo</span>
                  </div>
                  <div className="flex items-center text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                    <Check className="w-3 h-3 mr-1 text-emerald-500" /> Basic Nutrition & Medical
                  </div>
                </div>

                <div className="p-4 bg-primary/20 border border-primary/30 rounded-2xl ring-2 ring-primary/50 relative">
                  <Badge className="absolute -top-2 -right-2 bg-primary text-white text-[8px] font-black uppercase tracking-tighter">Popular</Badge>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-white">Holistic Support</span>
                    <span className="text-primary font-black">$150/mo</span>
                  </div>
                  <div className="flex items-center text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                    <Check className="w-3 h-3 mr-1 text-emerald-500" /> Education + Housing Priority
                  </div>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group/item">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-white">Full Family Care</span>
                    <span className="text-primary font-black">$350/mo</span>
                  </div>
                  <div className="flex items-center text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                    <Check className="w-3 h-3 mr-1 text-emerald-500" /> 24/7 Doula + Work Training
                  </div>
                </div>
              </div>

              <Button className="w-full mt-4 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold py-6 shadow-xl shadow-primary/20">
                Confirm Adoption
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Donor;
