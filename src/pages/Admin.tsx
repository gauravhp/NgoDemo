import { useState } from 'react';
import {
  Users,
  Settings,
  Activity,
  Shield,
  MoreHorizontal,
  Search,
  Package,
  Home,
  ClipboardList,
  AlertTriangle,
  Download,
  UserMinus,
  CalendarPlus,
  RefreshCw,
  BookOpen,
  Mail,
  Send,
  MessageSquare,
  Trophy,
  Banknote,
  Edit,
  Plus,
  Trash2,
  ChevronRight,
  Filter,
  History
} from 'lucide-react';
import {
  mockInventory,
  mockHouses,
  mockWaitingList,
  mockMothers,
  mockAdminCourses,
  mockNewsletters,
  mockAdminMessages,
  mockAdminEvents,
  mockRecentPayments,
  mockAdminUsers,
  mockAuditLogs
} from "@/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription
} from "@/components/ui/dialog";

const Admin = () => {
  const [activeTab, setActiveTab] = useState('operations');
  const [editingItem, setEditingItem] = useState<any>(null);
  const [selectedResident, setSelectedResident] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gray-50 flex -m-8">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col fixed h-full z-10">
        <div className="p-8">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="font-black text-lg tracking-tight">Admin OS</span>
          </div>
          
          <nav className="space-y-1">
            <Button 
              variant="ghost" 
              onClick={() => setActiveTab('operations')}
              className={`w-full justify-start gap-3 font-black text-xs uppercase tracking-widest ${activeTab === 'operations' ? 'bg-gray-50 text-primary' : 'text-gray-400 hover:text-gray-900'}`}
            >
              <Activity className="w-4 h-4" />
              Operations
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => setActiveTab('inventory')}
              className={`w-full justify-start gap-3 font-black text-xs uppercase tracking-widest ${activeTab === 'inventory' ? 'bg-gray-50 text-primary' : 'text-gray-400 hover:text-gray-900'}`}
            >
              <Package className="w-4 h-4" />
              Inventory
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => setActiveTab('housing')}
              className={`w-full justify-start gap-3 font-black text-xs uppercase tracking-widest ${activeTab === 'housing' ? 'bg-gray-50 text-primary' : 'text-gray-400 hover:text-gray-900'}`}
            >
              <Home className="w-4 h-4" />
              Housing
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => setActiveTab('mothers')}
              className={`w-full justify-start gap-3 font-black text-xs uppercase tracking-widest ${activeTab === 'mothers' ? 'bg-gray-50 text-primary' : 'text-gray-400 hover:text-gray-900'}`}
            >
              <Users className="w-4 h-4" />
              Mothers
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => setActiveTab('settings')}
              className={`w-full justify-start gap-3 font-black text-xs uppercase tracking-widest mt-8 ${activeTab === 'settings' ? 'bg-gray-50 text-primary' : 'text-gray-400 hover:text-gray-900'}`}
            >
              <Settings className="w-4 h-4" />
              Settings
            </Button>
          </nav>
        </div>
      </aside>

      {/* Main Admin Content */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        {activeTab === 'operations' && (
          <>
            <header className="flex justify-between items-center mb-12">
              <div>
                <h1 className="text-3xl font-black tracking-tight text-gray-900">Operations Center</h1>
                <p className="text-gray-500 font-medium">Real-time NGO logistics and capacity management</p>
              </div>
              <div className="flex gap-4">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    className="pl-10 pr-4 py-2 bg-white border border-gray-100 rounded-xl text-sm font-medium w-64 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                  />
                </div>
                <Button className="rounded-xl bg-black text-white font-black text-xs uppercase px-6">
                  <Download className="w-4 h-4 mr-2" />
                  Export Data
                </Button>
              </div>
            </header>

            {/* Operational Stats Overview */}
            <div className="grid grid-cols-4 gap-6 mb-12">
              {[
                { label: 'Total Mothers', value: '1,248', change: '+12%', icon: Users, color: 'blue' },
                { label: 'Warehouse Stock', value: '42.5k', change: '-4%', icon: Package, color: 'emerald' },
                { label: 'Housing Capacity', value: '82%', change: '+3%', icon: Home, color: 'amber' },
                { label: 'Waitlist Count', value: '142', change: '+18%', icon: ClipboardList, color: 'rose' }
              ].map((stat, i) => (
                <Card key={i} className="border-none shadow-sm rounded-3xl group hover:shadow-md transition-all cursor-pointer bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 bg-${stat.color}-50 rounded-2xl group-hover:scale-110 transition-transform`}>
                        <stat.icon className={`w-5 h-5 text-${stat.color}-500`} />
                      </div>
                      <div className={`text-[10px] font-black uppercase tracking-widest ${stat.change.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                        {stat.change}
                      </div>
                    </div>
                    <div className="text-2xl font-black text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Housing Management */}
              <Card className="lg:col-span-2 rounded-[2.5rem] border-none shadow-sm bg-white overflow-hidden">
                <CardHeader className="p-8 pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl font-black text-gray-900 tracking-tight">Housing Capacity</CardTitle>
                      <p className="text-xs font-medium text-gray-500 mt-1">Status across all locations</p>
                    </div>
                    <Button variant="ghost" size="sm" className="font-black text-[10px] uppercase text-primary">Add Location</Button>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {mockHouses.map((house) => (
                      <div key={house.id} className="p-5 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-primary/20 transition-all">
                        <div className="flex justify-between items-start mb-4">
                          <div className="font-black text-gray-900">{house.name}</div>
                          <Badge variant="secondary" className="bg-white border-none text-[10px] font-black uppercase shadow-sm">
                            {Math.round((house.occupied/house.totalBeds)*100)}%
                          </Badge>
                        </div>
                        <div className="space-y-1 mb-4">
                          <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Occupancy</div>
                          <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                            <div
                              className="bg-primary h-full rounded-full transition-all duration-1000"
                              style={{ width: `${(house.occupied/house.totalBeds)*100}%` }}
                            />
                          </div>
                        </div>
                        <div className="flex justify-between text-[10px] font-black">
                          <span className="text-gray-900">{house.occupied}/{house.totalBeds} Beds</span>
                          <span className={house.totalBeds - house.occupied > 0 ? "text-emerald-500" : "text-rose-500"}>
                            {house.totalBeds - house.occupied} Vacant
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Critical Inventory */}
              <Card className="rounded-[2.5rem] border-none shadow-sm bg-gray-900 text-white overflow-hidden relative group">
                <CardContent className="p-8">
                  <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                    <AlertTriangle className="w-64 h-64" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-xl font-black tracking-tight">Low Stock Alerts</h3>
                      <Badge className="bg-rose-500/20 text-rose-500 border-none font-black text-[10px] uppercase tracking-widest">Action Needed</Badge>
                    </div>
                    
                    <div className="space-y-4">
                      {mockInventory.filter(i => i.status !== 'Healthy').map((item) => (
                        <div key={item.id} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between">
                          <div>
                            <div className="font-bold text-sm">{item.item}</div>
                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.stock} {item.unit} left</div>
                          </div>
                          <Badge className={item.status === 'Critical' ? "bg-rose-500 text-white border-none text-[8px] font-black" : "bg-amber-500 text-white border-none text-[8px] font-black"}>
                            {item.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                    <Button 
                      onClick={() => setActiveTab('inventory')}
                      className="w-full mt-8 rounded-2xl bg-white text-gray-900 font-black text-xs py-5 hover:bg-gray-100 transition-all uppercase tracking-widest"
                    >
                      View Full Inventory
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Case Management */}
              <Card className="rounded-[2.5rem] border-none shadow-sm bg-white overflow-hidden">
                <CardHeader className="p-8 pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl font-black text-gray-900 tracking-tight">Case Management</CardTitle>
                      <p className="text-xs font-medium text-gray-500 mt-1">Manage mothers and donor reassignments</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader className="bg-gray-50/50">
                      <TableRow>
                        <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-left">Mother</TableHead>
                        <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-left">Donor Assigned</TableHead>
                        <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockMothers.map((mother) => (
                        <TableRow key={mother.id} className="border-b border-gray-50 last:border-none group hover:bg-gray-50/50 transition-colors">
                          <TableCell className="p-4">
                            <div className="font-bold text-sm text-gray-900">{mother.name}</div>
                            <Badge className="bg-blue-50 text-blue-700 border-none text-[8px] font-black uppercase">{mother.package}</Badge>
                          </TableCell>
                          <TableCell className="p-4 text-sm text-gray-600">{mother.donor}</TableCell>
                          <TableCell className="p-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button size="icon" variant="ghost" className="h-8 w-8 text-rose-500 hover:bg-rose-50"><UserMinus className="w-4 h-4" /></Button>
                              <Button size="icon" variant="ghost" className="h-8 w-8 text-primary hover:bg-primary/5"><RefreshCw className="w-4 h-4" /></Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Course Scheduling */}
              <Card className="rounded-[2.5rem] border-none shadow-sm bg-white overflow-hidden">
                <CardHeader className="p-8 pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-black text-gray-900 tracking-tight">Course Scheduling</CardTitle>
                    <Button className="rounded-xl bg-primary text-white font-black text-[10px] uppercase px-4 h-9">
                      <CalendarPlus className="w-4 h-4 mr-2" /> Schedule
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-4">
                  <div className="space-y-4">
                    {mockAdminCourses.map((course) => (
                      <div key={course.id} className="p-4 bg-gray-50 rounded-3xl border border-gray-100 flex items-center justify-between group hover:border-primary/20 transition-all">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-white rounded-2xl group-hover:scale-110 transition-transform shadow-sm">
                            <BookOpen className="w-5 h-5 text-indigo-500" />
                          </div>
                          <div>
                            <div className="font-black text-gray-900 text-sm">{course.title}</div>
                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{course.scheduledDate} &bull; {course.enrolled}/{course.capacity}</div>
                          </div>
                        </div>
                        <Button size="icon" variant="ghost" className="rounded-xl hover:bg-white text-gray-400 hover:text-gray-900">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {activeTab === 'settings' && (
          <>
            <header className="mb-12">
              <h1 className="text-3xl font-black tracking-tight text-gray-900">System Settings</h1>
              <p className="text-gray-500 font-medium">Configure global parameters and manage administrative access</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Admin Users */}
                <Card className="rounded-[2.5rem] border-none shadow-sm bg-white overflow-hidden">
                  <CardHeader className="p-8 pb-4 flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-xl font-black text-gray-900 tracking-tight">Admin Users</CardTitle>
                      <p className="text-xs font-medium text-gray-500 mt-1">Authorized staff with system access</p>
                    </div>
                    <Button className="rounded-xl bg-black text-white font-black text-[10px] uppercase h-9 px-4">
                      Add Admin
                    </Button>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader className="bg-gray-50/50">
                        <TableRow>
                          <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-left">Admin User</TableHead>
                          <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-left">Role</TableHead>
                          <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-right">Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mockAdminUsers.map((user) => (
                          <TableRow key={user.id} className="border-b border-gray-50 last:border-none group hover:bg-gray-50/50 transition-colors">
                            <TableCell className="p-4">
                              <div className="font-bold text-sm text-gray-900">{user.name}</div>
                              <div className="text-[10px] text-gray-400 font-medium">{user.email}</div>
                            </TableCell>
                            <TableCell className="p-4">
                              <Badge className="bg-gray-100 text-gray-600 border-none text-[8px] font-black uppercase">{user.role}</Badge>
                            </TableCell>
                            <TableCell className="p-4 text-right">
                              <Badge className={user.status === 'Active' ? "bg-emerald-50 text-emerald-700 border-none text-[8px] font-black uppercase" : "bg-gray-100 text-gray-400 border-none text-[8px] font-black uppercase"}>
                                {user.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* Audit Logs */}
                <Card className="rounded-[2.5rem] border-none shadow-sm bg-white overflow-hidden">
                  <CardHeader className="p-8 pb-4">
                    <CardTitle className="text-xl font-black text-gray-900 tracking-tight">Security & Audit Logs</CardTitle>
                    <p className="text-xs font-medium text-gray-500 mt-1">Immutable record of all system modifications</p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y divide-gray-50">
                      {mockAuditLogs.map((log) => (
                        <div key={log.id} className="p-6 hover:bg-gray-50/50 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-gray-100 rounded-xl"><History className="w-4 h-4 text-gray-400" /></div>
                              <div className="font-black text-sm text-gray-900 uppercase tracking-tight">{log.action}</div>
                            </div>
                            <span className="text-[10px] font-bold text-gray-400">{log.timestamp}</span>
                          </div>
                          <p className="text-xs text-gray-500 ml-11 font-medium">{log.details}</p>
                          <div className="text-[9px] font-black text-primary uppercase tracking-widest mt-2 ml-11">By: {log.user}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                {/* System Configuration */}
                <Card className="rounded-[2.5rem] border-none shadow-sm bg-gray-900 text-white overflow-hidden p-8">
                  <h3 className="text-xl font-black tracking-tight mb-8">System Configuration</h3>
                  <div className="space-y-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold">Maintenance Mode</div>
                        <p className="text-[10px] text-gray-400 mt-1 font-medium uppercase tracking-widest">Global lock on modifications</p>
                      </div>
                      <div className="w-12 h-6 bg-white/10 rounded-full relative cursor-pointer group">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-gray-400 rounded-full group-hover:scale-110 transition-all" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold">Auto Donor-Mother Link</div>
                        <p className="text-[10px] text-gray-400 mt-1 font-medium uppercase tracking-widest">Matches by location/package</p>
                      </div>
                      <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer group">
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full group-hover:scale-110 transition-all shadow-lg" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Inventory Alert Threshold</div>
                      <div className="flex items-center gap-4">
                        <input type="range" className="flex-1 accent-primary bg-white/10 rounded-lg h-1" defaultValue={15} />
                        <span className="text-lg font-black tracking-tighter">15%</span>
                      </div>
                    </div>

                    <Button className="w-full rounded-2xl bg-white text-gray-900 font-black text-[10px] py-6 uppercase tracking-widest hover:bg-gray-100 shadow-xl shadow-black/20">
                      Apply Global Config
                    </Button>
                  </div>
                </Card>

                {/* Database Health */}
                <Card className="rounded-[2.5rem] border-none shadow-sm bg-white p-8 overflow-hidden relative group">
                  <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                    <Settings className="w-48 h-48" />
                  </div>
                  <h3 className="text-xl font-black tracking-tight text-gray-900 mb-6">Database Health</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Connectivity</div>
                      <Badge className="bg-emerald-50 text-emerald-600 border-none text-[8px] font-black uppercase">Active</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Latent Backup</div>
                      <span className="text-xs font-bold text-gray-900">42m ago</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Records</div>
                      <span className="text-xs font-black text-primary">124.5k</span>
                    </div>
                    <Button variant="ghost" className="w-full text-primary font-black text-[10px] uppercase h-10 hover:bg-primary/5">
                      Download Full Backup
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </>
        )}

        {activeTab === 'inventory' && (
          <>
            <header className="flex justify-between items-center mb-12">
              <div>
                <h1 className="text-3xl font-black tracking-tight text-gray-900">Inventory Management</h1>
                <p className="text-gray-500 font-medium">Warehouse stock control and distribution tracking</p>
              </div>
              <div className="flex gap-4">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search inventory..."
                    className="pl-10 pr-4 py-2 bg-white border border-gray-100 rounded-xl text-sm font-medium w-64 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                  />
                </div>
                <Button className="rounded-xl bg-black text-white font-black text-xs uppercase px-6">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Item
                </Button>
              </div>
            </header>

            {/* Inventory Filters/Stats */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              {[
                { label: 'Total Items', value: mockInventory.length, icon: Package, color: 'blue' },
                { label: 'Low Stock', value: mockInventory.filter(i => i.status === 'Low Stock').length, icon: AlertTriangle, color: 'amber' },
                { label: 'Critical Stock', value: mockInventory.filter(i => i.status === 'Critical').length, icon: AlertTriangle, color: 'rose' },
                { label: 'Recent Deliveries', value: '12', icon: History, color: 'emerald' }
              ].map((stat, i) => (
                <Card key={i} className="border-none shadow-sm rounded-3xl bg-white">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className={`p-3 bg-${stat.color}-50 rounded-2xl`}>
                      <stat.icon className={`w-5 h-5 text-${stat.color}-500`} />
                    </div>
                    <div>
                      <div className="text-xl font-black text-gray-900">{stat.value}</div>
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="rounded-[2.5rem] border-none shadow-sm bg-white overflow-hidden">
              <CardHeader className="p-8 pb-4 flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-black text-gray-900 tracking-tight">Stock Ledger</CardTitle>
                  <p className="text-xs font-medium text-gray-500 mt-1">Detailed inventory levels and thresholds</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="rounded-xl text-[10px] font-black uppercase border-gray-100 h-9">
                    <Filter className="w-3 h-3 mr-2" /> Filter
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-xl text-[10px] font-black uppercase border-gray-100 h-9">
                    <Download className="w-3 h-3 mr-2" /> CSV
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-gray-50/50">
                    <TableRow>
                      <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-left">Product Details</TableHead>
                      <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-left">Category</TableHead>
                      <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-right">Current Stock</TableHead>
                      <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-right">Min Threshold</TableHead>
                      <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-center">Status</TableHead>
                      <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockInventory.map((item) => (
                      <TableRow key={item.id} className="border-b border-gray-50 last:border-none hover:bg-gray-50/50 transition-colors">
                        <TableCell className="p-4">
                          <div className="font-bold text-sm text-gray-900">{item.item}</div>
                          <div className="text-[10px] text-gray-400 font-medium tracking-tight">ID: {item.id} &bull; Last Restock: {item.lastRestocked}</div>
                        </TableCell>
                        <TableCell className="p-4">
                          <Badge variant="secondary" className="bg-gray-100 text-gray-600 border-none text-[8px] font-black uppercase">{item.category}</Badge>
                        </TableCell>
                        <TableCell className="p-4 text-right font-black text-sm text-gray-900">
                          {item.stock.toLocaleString()} <span className="text-[10px] text-gray-400 font-bold uppercase">{item.unit}</span>
                        </TableCell>
                        <TableCell className="p-4 text-right font-bold text-xs text-gray-400">
                          {item.minStock} {item.unit}
                        </TableCell>
                        <TableCell className="p-4 text-center">
                          <Badge className={
                            item.status === 'Healthy' ? "bg-emerald-50 text-emerald-700 border-none text-[8px] font-black uppercase" :
                            item.status === 'Low Stock' ? "bg-amber-50 text-amber-700 border-none text-[8px] font-black uppercase" :
                            "bg-rose-50 text-rose-700 border-none text-[8px] font-black uppercase"
                          }>
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="p-4 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button 
                                  size="icon" 
                                  variant="ghost" 
                                  onClick={() => setEditingItem(item)}
                                  className="h-8 w-8 text-primary hover:bg-primary/5 rounded-lg"
                                >
                                  <Edit className="w-4 h-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="rounded-[2rem] border-none shadow-2xl p-8 max-w-md">
                                <DialogHeader>
                                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                                    <Package className="w-6 h-6 text-primary" />
                                  </div>
                                  <DialogTitle className="text-2xl font-black text-gray-900 tracking-tight">Edit Inventory Item</DialogTitle>
                                  <DialogDescription className="font-medium text-gray-500">
                                    Adjust stock levels and thresholds for {editingItem?.item}.
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-6 py-6">
                                  <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Current Stock Quantity</label>
                                    <input 
                                      type="number" 
                                      defaultValue={editingItem?.stock}
                                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Minimum Threshold</label>
                                    <input 
                                      type="number" 
                                      defaultValue={editingItem?.minStock}
                                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    />
                                  </div>
                                  <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-100/50">
                                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                                    <p className="text-[10px] font-bold text-amber-700 leading-relaxed uppercase tracking-wide">
                                      Changes will trigger automated alerts if stock falls below new thresholds.
                                    </p>
                                  </div>
                                </div>
                                <DialogFooter className="gap-2 sm:gap-0">
                                  <Button variant="ghost" className="rounded-xl font-black text-xs uppercase text-gray-400">Cancel</Button>
                                  <Button className="rounded-xl bg-black text-white font-black text-xs uppercase px-8 h-12 shadow-lg shadow-black/10">
                                    Save Changes
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                            <Button size="icon" variant="ghost" className="h-8 w-8 text-gray-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </>
        )}

        {activeTab === 'housing' && (
          <>
            <header className="flex justify-between items-center mb-12">
              <div>
                <h1 className="text-3xl font-black tracking-tight text-gray-900">Housing Management</h1>
                <p className="text-gray-500 font-medium">Manage residential locations, occupancy, and intake</p>
              </div>
              <div className="flex gap-4">
                <Button className="rounded-xl bg-black text-white font-black text-xs uppercase px-6">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Location
                </Button>
              </div>
            </header>

            {/* Housing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {mockHouses.map((house) => (
                <Card key={house.id} className="rounded-[2.5rem] border-none shadow-sm bg-white overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <CardHeader className="p-8 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Home className="w-6 h-6 text-primary" />
                      </div>
                      <Badge className="bg-emerald-50 text-emerald-600 border-none font-black text-[10px] uppercase">{Math.round((house.occupied/house.totalBeds)*100)}% Full</Badge>
                    </div>
                    <CardTitle className="text-xl font-black text-gray-900 tracking-tight">{house.name}</CardTitle>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{house.location}</p>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <div className="space-y-6 mt-4">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                        <span className="text-gray-400">Total Capacity</span>
                        <span className="text-gray-900">{house.totalBeds} Beds</span>
                      </div>
                      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full transition-all duration-1000" style={{ width: `${(house.occupied/house.totalBeds)*100}%` }} />
                      </div>
                      
                      <div className="space-y-3">
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Active Residents</div>
                        <div className="space-y-2">
                          {(house as any).residents?.slice(0, 3).map((resident: any) => (
                            <div key={resident.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-100">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center font-black text-[10px] text-primary shadow-sm">{resident.name[0]}</div>
                                <div>
                                  <div className="font-bold text-xs text-gray-900">{resident.name}</div>
                                  <div className="text-[9px] font-medium text-gray-400">Room {resident.room}</div>
                                </div>
                              </div>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    onClick={() => setSelectedResident({ ...resident, houseName: house.name })}
                                    className="h-7 w-7 rounded-lg hover:bg-white text-primary"
                                  >
                                    <ChevronRight className="w-4 h-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="rounded-[2.5rem] border-none shadow-2xl p-0 max-w-2xl overflow-hidden bg-white">
                                  <div className="bg-gray-900 p-12 text-white relative">
                                    <div className="absolute top-0 right-0 p-12 opacity-10">
                                      <Users className="w-32 h-32" />
                                    </div>
                                    <Badge className="bg-primary text-white border-none font-black text-[10px] uppercase tracking-widest mb-4">Resident Profile</Badge>
                                    <h2 className="text-4xl font-black tracking-tight mb-2">{selectedResident?.name}</h2>
                                    <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">
                                      {selectedResident?.houseName} &bull; Room {selectedResident?.room}
                                    </p>
                                  </div>
                                  <div className="p-12">
                                    <div className="grid grid-cols-2 gap-12">
                                      <div className="space-y-8">
                                        <div>
                                          <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Current Status</div>
                                          <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-3xl border border-emerald-100">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                            <span className="font-black text-emerald-700 text-sm">{selectedResident?.status}</span>
                                          </div>
                                        </div>
                                        <div>
                                          <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Assigned Donor</div>
                                          <div className="p-6 bg-gray-50 rounded-[2rem] border border-gray-100">
                                            <div className="flex items-center gap-4 mb-4">
                                              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                                                <Trophy className="w-6 h-6 text-amber-500" />
                                              </div>
                                              <div>
                                                <div className="font-black text-gray-900">{selectedResident?.donor}</div>
                                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Major Donor &bull; Platinum</div>
                                              </div>
                                            </div>
                                            <Button variant="outline" className="w-full rounded-xl font-black text-[10px] uppercase border-gray-200 text-gray-500">Contact Donor</Button>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="space-y-8">
                                        <div>
                                          <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Housing Actions</div>
                                          <div className="space-y-3">
                                            <Button className="w-full justify-between h-14 px-6 rounded-2xl bg-gray-900 text-white font-black text-[10px] uppercase tracking-widest group">
                                              Transfer Resident <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                            <Button variant="outline" className="w-full justify-between h-14 px-6 rounded-2xl border-gray-100 text-gray-900 font-black text-[10px] uppercase tracking-widest group">
                                              Update Status <Edit className="w-4 h-4" />
                                            </Button>
                                            <Button variant="outline" className="w-full justify-between h-14 px-6 rounded-2xl border-rose-100 text-rose-500 hover:bg-rose-50 font-black text-[10px] uppercase tracking-widest group">
                                              Mark Departure <UserMinus className="w-4 h-4" />
                                            </Button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          ))}
                        </div>
                        {((house as any).residents?.length || 0) > 3 && (
                          <div className="text-center mt-4">
                            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">+ {(house as any).residents.length - 3} More Residents</span>
                          </div>
                        )}
                      </div>
                      
                      <Button 
                        variant="outline" 
                        onClick={() => {}}
                        className="w-full mt-4 rounded-2xl border-gray-100 text-gray-900 font-black text-[10px] uppercase tracking-widest h-12 hover:bg-gray-50"
                      >
                        Manage Location
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Waiting List Section (Reusable but with more detail) */}
            <Card className="rounded-[2.5rem] border-none shadow-sm bg-gray-900 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <ClipboardList className="w-48 h-48" />
              </div>
              <CardHeader className="p-12 pb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-3xl font-black tracking-tight">Housing Waitlist</CardTitle>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mt-2">142 Mothers awaiting placement</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-12 pt-6">
                <div className="grid grid-cols-3 gap-6">
                  {mockWaitingList.map((mother) => (
                    <div key={mother.id} className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center font-black text-gray-900 text-xl shadow-lg">{mother.name[0]}</div>
                        <Badge className={mother.priority === 'High' ? "bg-rose-500 text-white border-none text-[8px] font-black uppercase" : "bg-amber-500 text-white border-none text-[8px] font-black uppercase"}>
                          {mother.priority} Priority
                        </Badge>
                      </div>
                      <div className="font-black text-xl mb-1">{mother.name}</div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">{mother.daysWaiting} Days Waiting</div>
                      <div className="flex flex-wrap gap-2">
                        {mother.needs.split(', ').map((need, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-white/5 border-none text-white text-[8px] font-black uppercase">
                            {need}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full mt-6 rounded-xl bg-white text-gray-900 font-black text-[10px] uppercase h-10 hover:bg-gray-100">
                        Allot Bed
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {activeTab === 'mothers' && (
          <>
            <header className="flex justify-between items-center mb-12">
              <div>
                <h1 className="text-3xl font-black tracking-tight text-gray-900">Mother Management</h1>
                <p className="text-gray-500 font-medium">Review support packages, donor assignments, and enrollment</p>
              </div>
              <div className="flex gap-4">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search mothers..."
                    className="pl-10 pr-4 py-2 bg-white border border-gray-100 rounded-xl text-sm font-medium w-64 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                  />
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="rounded-xl bg-black text-white font-black text-xs uppercase px-6">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Mother
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="rounded-[2rem] border-none shadow-2xl p-8 max-w-lg">
                    <DialogHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <DialogTitle className="text-2xl font-black text-gray-900 tracking-tight">Enroll New Mother</DialogTitle>
                      <DialogDescription className="font-medium text-gray-500">
                        Begin the intake process and donor matching for a new mother.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-2 gap-4 py-6">
                      <div className="space-y-2 col-span-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Full Name</label>
                        <input type="text" placeholder="Enter name..." className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Support Package</label>
                        <select className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                          <option>Essential Care ($50/mo)</option>
                          <option>Holistic Care ($150/mo)</option>
                          <option>Full Family ($350/mo)</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Initial Location</label>
                        <select className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                          <option>Grace Haven</option>
                          <option>Hope House</option>
                          <option>Faith Manor</option>
                          <option>Outreach (Remote)</option>
                        </select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button className="w-full rounded-2xl bg-black text-white font-black text-xs py-5 uppercase tracking-widest">Complete Enrollment</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </header>

            {/* Mother Table */}
            <Card className="rounded-[2.5rem] border-none shadow-sm bg-white overflow-hidden">
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-gray-50/50">
                    <TableRow>
                      <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-left">Mother Info</TableHead>
                      <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-left">Donor Assigned</TableHead>
                      <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-left">Location</TableHead>
                      <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-right">Join Date</TableHead>
                      <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockMothers.map((mother) => (
                      <TableRow key={mother.id} className="border-b border-gray-50 last:border-none group hover:bg-gray-50/50 transition-colors">
                        <TableCell className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center font-black text-primary shadow-sm text-sm">{mother.name[0]}</div>
                            <div>
                              <div className="font-bold text-sm text-gray-900">{mother.name}</div>
                              <Badge className="bg-blue-50 text-blue-700 border-none text-[8px] font-black uppercase">{mother.package}</Badge>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="p-4">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                            <div className="font-bold text-sm text-gray-900">{mother.donor}</div>
                          </div>
                        </TableCell>
                        <TableCell className="p-4">
                          <div className="text-sm font-medium text-gray-600">{mother.location || 'Grace Haven'}</div>
                        </TableCell>
                        <TableCell className="p-4 text-right">
                          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{mother.joined}</div>
                        </TableCell>
                        <TableCell className="p-4 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <Button size="icon" variant="ghost" className="h-8 w-8 text-primary hover:bg-primary/5 rounded-lg"><Edit className="w-4 h-4" /></Button>
                            <Button size="icon" variant="ghost" className="h-8 w-8 text-rose-500 hover:bg-rose-50 rounded-lg"><Trash2 className="w-4 h-4" /></Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Donor Quick View Stats for Mothers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card className="rounded-[2.5rem] border-none shadow-sm bg-gray-900 text-white p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-black tracking-tight">Match Pipeline</h3>
                  <Badge className="bg-primary/20 text-primary border-none text-[10px] font-black uppercase">Optimization Required</Badge>
                </div>
                <div className="space-y-6">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between">
                    <div>
                      <div className="font-bold text-sm">Waiting for Match</div>
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">12 Mothers Priority</div>
                    </div>
                    <Button variant="ghost" className="text-primary font-black text-[10px] uppercase">Review</Button>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between">
                    <div>
                      <div className="font-bold text-sm">Donor Reassignments</div>
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">3 Pending Transfers</div>
                    </div>
                    <Button variant="ghost" className="text-primary font-black text-[10px] uppercase">Approve</Button>
                  </div>
                </div>
              </Card>

              <Card className="rounded-[2.5rem] border-none shadow-sm bg-white p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-black tracking-tight text-gray-900">Program Distribution</h3>
                  <Badge className="bg-emerald-50 text-emerald-600 border-none text-[10px] font-black uppercase">Active Allocation</Badge>
                </div>
                <div className="space-y-6">
                  {[
                    { label: 'Holistic Care', count: 42, color: 'blue' },
                    { label: 'Full Family', count: 18, color: 'indigo' },
                    { label: 'Essential Care', count: 96, color: 'emerald' }
                  ].map((prog, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2">
                        <span className="text-gray-400">{prog.label}</span>
                        <span className="text-gray-900">{prog.count} Slots</span>
                      </div>
                      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div className={`bg-${prog.color}-500 h-full rounded-full transition-all duration-1000`} style={{ width: `${(prog.count/156)*100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </>
        )}

        {/* Global Footer Components - Newsletters, Messages, etc. - only shown in operations for now to keep views distinct */}
        {activeTab === 'operations' && (
          <div className="mt-12 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Fundraising Events */}
              <Card className="rounded-[2.5rem] border-none shadow-sm bg-white overflow-hidden">
                <CardHeader className="p-8 pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-black text-gray-900 tracking-tight">Fundraising Events</CardTitle>
                    <Button className="rounded-xl bg-primary text-white font-black text-[10px] uppercase px-4 h-9 shadow-sm hover:scale-105 transition-transform">
                      <Trophy className="w-4 h-4 mr-2" /> New Event
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-4">
                  <div className="space-y-6">
                    {mockAdminEvents.map((event) => (
                      <div key={event.id} className="p-5 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-primary/20 transition-all">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <div className="font-black text-gray-900">{event.title}</div>
                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{event.date}</div>
                          </div>
                          <Badge className={event.status === 'Active' ? "bg-emerald-500 text-white border-none text-[8px] font-black uppercase" : "bg-gray-200 text-gray-500 border-none text-[8px] font-black uppercase"}>{event.status}</Badge>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-2">
                          <div className="bg-primary h-full rounded-full transition-all duration-1000 shadow-sm" style={{ width: `${Math.min((parseFloat(event.raised.replace(/[$,]/g, '')) / parseFloat(event.goal.replace(/[$,]/g, ''))) * 100, 100)}%` }} />
                        </div>
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                          <span className="text-gray-400">Raised: {event.raised}</span>
                          <span className="text-primary">Goal: {event.goal}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Donations */}
              <Card className="rounded-[2.5rem] border-none shadow-sm bg-white overflow-hidden">
                <CardHeader className="p-8 pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-black text-gray-900 tracking-tight">Recent Donations</CardTitle>
                    <div className="p-3 bg-emerald-50 rounded-2xl"><Banknote className="w-6 h-6 text-emerald-500" /></div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader className="bg-gray-50/50">
                      <TableRow>
                        <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-left">Donor</TableHead>
                        <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-right">Amount</TableHead>
                        <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-right">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockRecentPayments.slice(0, 4).map((payment) => (
                        <TableRow key={payment.id} className="border-b border-gray-50 last:border-none hover:bg-gray-50/50">
                          <TableCell className="p-4 font-bold text-sm text-gray-900">{payment.donor}<div className="text-[10px] text-gray-400 font-medium">{payment.package}</div></TableCell>
                          <TableCell className="p-4 text-right text-sm font-black text-primary">{payment.amount}</TableCell>
                          <TableCell className="p-4 text-right"><Badge className="bg-emerald-50 text-emerald-700 border-none text-[8px] font-black uppercase">{payment.status}</Badge></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Newsletter Automation */}
              <Card className="rounded-[2.5rem] border-none shadow-sm bg-white overflow-hidden">
                <CardHeader className="p-8 pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-black text-gray-900 tracking-tight">Newsletters</CardTitle>
                    <Button className="rounded-xl bg-primary text-white font-black text-[10px] uppercase px-4 h-9"><Mail className="w-4 h-4 mr-2" /> Create</Button>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader className="bg-gray-50/50">
                      <TableRow>
                        <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-left">Campaign</TableHead>
                        <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-right">Scheduled</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockNewsletters.map((newsletter) => (
                        <TableRow key={newsletter.id} className="border-b border-gray-50 last:border-none hover:bg-gray-50/50">
                          <TableCell className="p-4 font-bold text-sm text-gray-900">{newsletter.title}<div className="text-[10px] text-gray-400 font-medium">{newsletter.segment}</div></TableCell>
                          <TableCell className="p-4 text-right text-sm font-bold text-gray-900">{newsletter.scheduled}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Communication Hub */}
              <Card className="rounded-[2.5rem] border-none shadow-sm bg-white overflow-hidden">
                <CardHeader className="p-8 pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-black text-gray-900 tracking-tight">Communication Hub</CardTitle>
                    <Badge className="bg-rose-500 text-white border-none text-[10px] font-black uppercase">2 Unread</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-4">
                  <div className="space-y-4">
                    {mockAdminMessages.map((msg) => (
                      <div key={msg.id} className={`p-4 rounded-3xl border flex items-center justify-between transition-all ${msg.unread ? 'bg-primary/5 border-primary/10' : 'bg-gray-50 border-gray-100'}`}>
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-xl ${msg.unread ? 'bg-white text-primary' : 'bg-white text-gray-400'}`}><MessageSquare className="w-5 h-5" /></div>
                          <div>
                            <div className="font-black text-gray-900 text-sm">{msg.sender}</div>
                            <div className={`text-[10px] font-bold uppercase tracking-widest ${msg.unread ? 'text-primary' : 'text-gray-400'}`}>{msg.subject} &bull; {msg.time}</div>
                          </div>
                        </div>
                        <Button size="icon" variant="ghost" className={msg.unread ? 'text-primary' : 'text-gray-400'}><Send className="w-4 h-4" /></Button>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 rounded-2xl bg-black text-white font-black text-xs py-5 uppercase tracking-widest">Go to Inbox</Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Warehouse Inventory Preview */}
              <Card className="rounded-[2.5rem] border-none shadow-sm bg-white overflow-hidden">
                <CardHeader className="p-8 pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-black text-gray-900 tracking-tight">Warehouse Preview</CardTitle>
                    <Button 
                      variant="ghost" 
                      onClick={() => setActiveTab('inventory')}
                      className="text-primary font-black text-[10px] uppercase h-8 hover:bg-primary/5 px-3 rounded-lg flex items-center gap-1"
                    >
                      Management <ChevronRight className="w-3 h-3" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader className="bg-gray-50/50">
                      <TableRow>
                        <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-left">Product</TableHead>
                        <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-right">Stock</TableHead>
                        <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest p-4 text-right">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockInventory.slice(0, 4).map((item) => (
                        <TableRow key={item.id} className="border-b border-gray-50 last:border-none hover:bg-gray-50/50">
                          <TableCell className="p-4 font-bold text-sm text-gray-900">{item.item}<div className="text-[10px] text-gray-400 font-medium">{item.category}</div></TableCell>
                          <TableCell className="p-4 text-right text-sm font-bold text-gray-900">{item.stock.toLocaleString()} {item.unit}</TableCell>
                          <TableCell className="p-4 text-right"><Badge className={item.status === 'Healthy' ? "bg-emerald-50 text-emerald-700 border-none text-[8px] font-black uppercase" : item.status === 'Low Stock' ? "bg-amber-50 text-amber-700 border-none text-[8px] font-black uppercase" : "bg-rose-50 text-rose-700 border-none text-[8px] font-black uppercase"}>{item.status}</Badge></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Housing Waiting List */}
              <Card className="rounded-[2.5rem] border-none shadow-sm bg-white overflow-hidden">
                <CardHeader className="p-8 pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-black text-gray-900 tracking-tight">Waiting List</CardTitle>
                    <Badge className="bg-primary/10 text-primary border-none text-[10px] font-black uppercase">142 Total</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-4">
                  <div className="space-y-4">
                    {mockWaitingList.map((mother) => (
                      <div key={mother.id} className="p-4 bg-gray-50 rounded-3xl border border-gray-100 flex items-center justify-between group hover:border-primary/20 transition-all">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center font-black text-primary shadow-sm">{mother.name.split(' ').map(n => n[0]).join('')}</div>
                          <div>
                            <div className="font-black text-gray-900 text-sm">{mother.name}</div>
                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{mother.daysWaiting} Days Waiting</div>
                          </div>
                        </div>
                        <Badge className={mother.priority === 'High' ? "bg-rose-500 text-white border-none text-[8px] font-black uppercase w-16 justify-center" : "bg-amber-500 text-white border-none text-[8px] font-black uppercase w-16 justify-center"}>{mother.priority}</Badge>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 rounded-2xl bg-gray-50 text-gray-900 font-black text-xs py-5 uppercase tracking-widest border border-gray-100">View All Applications</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
