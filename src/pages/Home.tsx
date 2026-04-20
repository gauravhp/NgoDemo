import {
  Heart,
  Users,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-12rem)] flex flex-col items-center justify-center space-y-24 py-12">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8 max-w-4xl px-4"
      >
        <Badge variant="outline" className="px-4 py-1.5 rounded-full bg-primary/5 text-primary border-primary/20 font-black text-xs uppercase tracking-[0.2em]">
          <Sparkles className="w-3.5 h-3.5 mr-2" />
          The Future of Community Support
        </Badge>
        <h1 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tight leading-none">
          Empower <span className="text-primary italic">Generosity</span>, Support <span className="text-blue-500 italic">Mothers</span>.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">
          NgoDemo is a next-generation platform connecting generous donors with mothers in need.
          Real impact, real stories, real results.
        </p>
      </motion.section>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl px-4">
        {/* Donor Entry */}
        <motion.div
          whileHover={{ y: -15, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/donor">
            <Card className="h-full rounded-[3rem] border-none shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden bg-white group">
              <div className="h-48 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 group-hover:scale-125 transition-transform duration-700">
                  <Heart className="w-48 h-48 text-white fill-white" />
                </div>
              </div>
              <CardContent className="p-10 space-y-4">
                <Badge className="bg-primary/10 text-primary border-none font-black text-[10px] uppercase tracking-widest">
                  Impact Dashboard
                </Badge>
                <CardTitle className="text-3xl font-black text-gray-900 group-hover:text-primary transition-colors">Donor Portal</CardTitle>
                <CardDescription className="text-lg font-medium text-muted-foreground leading-relaxed">
                  Track your contributions, view real-time impact trajectory, and manage your recurring support.
                </CardDescription>
                <div className="pt-6 flex items-center text-primary font-black uppercase text-xs tracking-widest group-hover:translate-x-2 transition-transform">
                  Enter Portal <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>

        {/* Mother Entry */}
        <motion.div
          whileHover={{ y: -15, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/mother">
            <Card className="h-full rounded-[3rem] border-none shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden bg-white group">
              <div className="h-48 bg-blue-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 group-hover:scale-125 transition-transform duration-700">
                  <Users className="w-48 h-48 text-white fill-white" />
                </div>
              </div>
              <CardContent className="p-10 space-y-4">
                <Badge className="bg-blue-50 text-blue-500 border-none font-black text-[10px] uppercase tracking-widest">
                  Mobile First Experience
                </Badge>
                <CardTitle className="text-3xl font-black text-gray-900 group-hover:text-blue-500 transition-colors">Mother Care</CardTitle>
                <CardDescription className="text-lg font-medium text-muted-foreground leading-relaxed">
                  Your pregnancy journey, health stats, and community resources all in one mobile-optimized view.
                </CardDescription>
                <div className="pt-6 flex items-center text-blue-500 font-black uppercase text-xs tracking-widest group-hover:translate-x-2 transition-transform">
                  Access Tools <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>

        {/* Admin Entry */}
        <motion.div
          whileHover={{ y: -15, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/admin">
            <Card className="h-full rounded-[3rem] border-none shadow-xl hover:shadow-2xl hover:shadow-gray-900/20 transition-all duration-500 overflow-hidden bg-white group">
              <div className="h-48 bg-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 group-hover:scale-125 transition-transform duration-700">
                  <ShieldCheck className="w-48 h-48 text-white" />
                </div>
              </div>
              <CardContent className="p-10 space-y-4">
                <Badge className="bg-gray-100 text-gray-600 border-none font-black text-[10px] uppercase tracking-widest">
                  Data-Rich Systems
                </Badge>
                <CardTitle className="text-3xl font-black text-gray-900 group-hover:text-primary transition-colors">System Admin</CardTitle>
                <CardDescription className="text-lg font-medium text-muted-foreground leading-relaxed">
                  Full infrastructure visibility, user management, and detailed system vitals for global operations.
                </CardDescription>
                <div className="pt-6 flex items-center text-gray-900 font-black uppercase text-xs tracking-widest group-hover:translate-x-2 transition-transform">
                  Open Console <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      </div>

      {/* Footer Info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center space-y-2 pt-12"
      >
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">
          Built with Precision & Purpose
        </p>
        <p className="text-sm font-bold text-gray-400">
          NgoDemo &copy; {new Date().getFullYear()} &bull; v1.0.4-stable
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
