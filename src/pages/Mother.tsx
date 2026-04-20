import {
  Phone,
  MessageCircle,
  BookOpen,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Home,
  PackageCheck,
  Truck,
  Users,
  Share2,
  Circle
} from 'lucide-react';
import {
  Card
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  mockMotherProfile,
  timelineData,
  mockCourses,
  mockServiceAssignments,
  mockHousingStatus,
  mockEntitlements
} from "@/mockData";

const Mother = () => {
  return (
    <div className="max-w-md mx-auto space-y-8 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Banner */}
      <section className="relative h-64 rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-orange-400"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
        
        <div className="relative h-full flex flex-col justify-end p-8 text-white">
          <Badge className="w-fit mb-4 bg-white/20 backdrop-blur-md border-white/30 text-white font-bold">
            {mockMotherProfile.stage}
          </Badge>
          <h1 className="text-3xl font-black tracking-tight leading-none mb-2">
            Hello, {mockMotherProfile.name.split(' ')[0]}!
          </h1>
          <p className="text-primary-foreground/90 font-medium">
            Your baby is growing strong today.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="grid grid-cols-1 gap-4 px-2">
        <Button
          className="h-20 rounded-3xl bg-white border-none shadow-sm hover:shadow-md transition-all text-gray-900 justify-between px-6 group"
          variant="outline"
        >
          <div className="flex items-center">
            <div className="p-3 bg-primary/10 rounded-2xl mr-4 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <div className="font-black text-lg">Call Doula</div>
              <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Instant Support</div>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-300 group-hover:translate-x-1 transition-transform" />
        </Button>

        <Button
          className="h-20 rounded-3xl bg-white border-none shadow-sm hover:shadow-md transition-all text-gray-900 justify-between px-6 group"
          variant="outline"
        >
          <div className="flex items-center">
            <div className="p-3 bg-blue-50 rounded-2xl mr-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6 text-blue-500" />
            </div>
            <div className="text-left">
              <div className="font-black text-lg">Message Team</div>
              <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Ask a Question</div>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-300 group-hover:translate-x-1 transition-transform" />
        </Button>

        <Button
          className="h-20 rounded-3xl bg-white border-none shadow-sm hover:shadow-md transition-all text-gray-900 justify-between px-6 group"
          variant="outline"
        >
          <div className="flex items-center">
            <div className="p-3 bg-emerald-50 rounded-2xl mr-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6 text-emerald-500" />
            </div>
            <div className="text-left">
              <div className="font-black text-lg">Resources</div>
              <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Library & Guides</div>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-300 group-hover:translate-x-1 transition-transform" />
        </Button>
      </section>

      {/* Calendar & Registration */}
      <section className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-black text-gray-900 tracking-tight">Calendar</h2>
          <Button variant="ghost" className="text-primary font-bold text-xs p-0 h-auto">View All</Button>
        </div>

        {/* Weekly Mini Calendar */}
        <div className="flex justify-between mb-8">
          {[
            { day: 'M', date: '20' },
            { day: 'T', date: '21', active: true },
            { day: 'W', date: '22', hasEvent: true },
            { day: 'T', date: '23', hasEvent: true },
            { day: 'F', date: '24', hasEvent: true },
            { day: 'S', date: '25' },
            { day: 'S', date: '26' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-black text-gray-400 uppercase">{item.day}</span>
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm relative ${
                item.active ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-gray-50 text-gray-900'
              }`}>
                {item.date}
                {item.hasEvent && !item.active && (
                  <div className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Today's Schedule</div>
          {mockServiceAssignments.map((service) => (
            <div key={service.id} className="p-4 bg-primary/5 rounded-3xl border border-primary/10 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{service.title}</div>
                  <div className="text-[10px] font-bold text-primary uppercase tracking-wider">{service.time} &bull; {service.type}</div>
                </div>
              </div>
              <Badge className="bg-emerald-500 text-white border-none text-[8px] font-black uppercase tracking-widest px-2">Assigned</Badge>
            </div>
          ))}

          <div className="text-xs font-black text-gray-400 uppercase tracking-widest mt-6 mb-2">Available Courses</div>
          {mockCourses.slice(0, 2).map((course) => (
            <div key={course.id} className="p-4 bg-gray-50 rounded-3xl flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{course.title}</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{course.date} &bull; {course.time}</div>
                </div>
              </div>
              <Button size="sm" className="rounded-xl font-black text-[10px] bg-white text-gray-900 border border-gray-100 shadow-sm hover:bg-primary hover:text-white transition-all uppercase px-3">
                Register
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Housing & Essentials */}
      <section className="space-y-4">
        {/* Housing Status */}
        <Card className="rounded-[2.5rem] border-none shadow-sm bg-white p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-amber-50 rounded-2xl">
              <Home className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-black text-gray-900 tracking-tight">Housing Status</h3>
          </div>
          
          <div className="flex items-center justify-between p-5 bg-amber-50/50 rounded-3xl border border-amber-100">
            <div>
              <div className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-1">Waiting List</div>
              <div className="font-black text-xl text-gray-900">Position #{mockHousingStatus.position}</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Est. Wait</div>
              <div className="font-bold text-sm text-gray-900">{mockHousingStatus.estimatedWait}</div>
            </div>
          </div>
          
          <div className="mt-6 space-y-3">
            <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Available Vacancies</div>
            {mockHousingStatus.homeVacancies.map((home, i) => (
              <div key={i} className="flex items-center justify-between text-sm py-2 border-b border-gray-50 last:border-none">
                <span className="font-bold text-gray-900">{home.name}</span>
                <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 font-bold border-none text-[10px]">
                  {home.vacancies} spots left
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Product Entitlements & Warehouse */}
        <Card className="rounded-[2.5rem] border-none shadow-sm bg-gray-900 text-white p-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
            <PackageCheck className="w-32 h-32" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/10 rounded-2xl">
                <PackageCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-black tracking-tight">My Essentials</h3>
            </div>

            <div className="space-y-3 mb-8">
              {mockEntitlements.map((item) => (
                <div key={item.id} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between group">
                  <div>
                    <div className="font-bold text-white text-sm">{item.item}</div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.quantity}</div>
                  </div>
                  <Badge className="bg-primary/20 text-primary border-none text-[8px] font-black uppercase px-2">{item.status}</Badge>
                </div>
              ))}
            </div>

            <div className="p-5 bg-white/5 rounded-3xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-xl">
                  <Truck className="w-4 h-4 text-primary" />
                </div>
                <div className="font-black text-sm">Warehouse Pickup</div>
              </div>
              <p className="text-xs text-gray-400 font-medium leading-relaxed mb-4">
                Visit our East Side Warehouse (123 Main St) Mon-Fri 9am-4pm to pick up your ready items.
              </p>
              <Button className="w-full rounded-2xl bg-white text-gray-900 font-black text-xs py-5 hover:bg-gray-100">
                Schedule Pickup
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Timeline Section */}
      <section className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8">
        <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">Your Journey</h2>
        
        <div className="relative space-y-0">
          {/* Vertical Line */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-100"></div>

          {timelineData.map((item) => (
            <div key={item.id} className="relative pl-12 pb-10 last:pb-0">
              {/* Timeline Icon/Dot */}
              <div className={`absolute left-0 p-1.5 rounded-full z-10 ${
                item.status === 'completed' ? 'bg-emerald-100 text-emerald-600' :
                item.status === 'current' ? 'bg-primary text-white shadow-lg shadow-primary/30 ring-4 ring-primary/10' :
                'bg-gray-100 text-gray-400'
              }`}>
                {item.status === 'completed' ? <CheckCircle2 className="w-5 h-5" /> :
                 item.status === 'current' ? <item.icon className="w-5 h-5" /> :
                 <Circle className="w-5 h-5 fill-current opacity-20" />}
              </div>

              <div className={`transition-all duration-500 ${item.status === 'upcoming' ? 'opacity-50' : 'opacity-100'}`}>
                <div className="flex items-center justify-between mb-1">
                  <h3 className={`font-black ${item.status === 'current' ? 'text-primary' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-2 py-0.5 rounded-full">
                    {item.date}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                  {item.description}
                </p>
                
                {item.status === 'current' && (
                  <Button variant="link" className="p-0 h-auto text-primary font-bold text-xs mt-2">
                    Action Required: Check Details &rarr;
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community & Support */}
      <section className="grid grid-cols-2 gap-4">
        <Card className="rounded-[2.5rem] border-none shadow-sm bg-white p-6 flex flex-col items-center text-center group">
          <div className="p-4 bg-rose-50 rounded-3xl mb-4 group-hover:scale-110 transition-transform">
            <Users className="w-6 h-6 text-rose-500" />
          </div>
          <h4 className="font-black text-gray-900 text-sm leading-tight mb-2">Connect with Moms</h4>
          <p className="text-[10px] text-muted-foreground font-medium mb-4">Join the East Side Circle (12 moms active)</p>
          <Button size="sm" variant="outline" className="w-full rounded-xl border-gray-100 text-[10px] font-black uppercase">Join Circle</Button>
        </Card>

        <Card className="rounded-[2.5rem] border-none shadow-sm bg-white p-6 flex flex-col items-center text-center group">
          <div className="p-4 bg-indigo-50 rounded-3xl mb-4 group-hover:scale-110 transition-transform">
            <Share2 className="w-6 h-6 text-indigo-500" />
          </div>
          <h4 className="font-black text-gray-900 text-sm leading-tight mb-2">Invite Friends</h4>
          <p className="text-[10px] text-muted-foreground font-medium mb-4">Help another mother find support today.</p>
          <Button size="sm" variant="outline" className="w-full rounded-xl border-gray-100 text-[10px] font-black uppercase">Share App</Button>
        </Card>
      </section>

      {/* Health Stats Mini Card */}
      <section className="px-2">
        <Card className="rounded-3xl border-none bg-gray-900 text-white p-6 shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold">Latest Stats</h3>
            <Badge className="bg-white/10 text-white border-none text-[10px] tracking-widest uppercase">Verified</Badge>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter mb-1">Weight</div>
              <div className="font-black text-lg">{mockMotherProfile.healthStats.weight.split(' ')[0]}</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase">lbs</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter mb-1">BP</div>
              <div className="font-black text-lg">{mockMotherProfile.healthStats.bloodPressure}</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase">mmHg</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter mb-1">Heart</div>
              <div className="font-black text-lg">{mockMotherProfile.healthStats.heartRate.split(' ')[0]}</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase">bpm</div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Mother;
