import { motion } from 'framer-motion';
import { ExternalLink, Image as ImageIcon, Eye, Heart, Plus, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProfilePortfolioProps {
  portfolioUrls: string[];
}

export function ProfilePortfolio({ portfolioUrls }: ProfilePortfolioProps) {
  // Show placeholder if no portfolio
  if (!portfolioUrls || portfolioUrls.length === 0) {
    return (
      <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl shadow-blue-500/10 overflow-hidden relative group">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <CardHeader className="relative">
          <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <ImageIcon className="w-5 h-5 text-white" />
            </div>
            Portfolio
          </CardTitle>
        </CardHeader>
        
        <CardContent className="relative">
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Palette className="w-12 h-12 text-pink-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Portfolio Coming Soon</h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto text-lg">
              This professional is currently curating their best work to showcase. Amazing projects are on the way!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-md mx-auto mb-8">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                >
                  <Plus className="w-8 h-8 text-gray-400" />
                </motion.div>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-full border border-pink-200/50">
              <ImageIcon className="w-4 h-4 text-pink-600" />
              <span className="text-sm font-medium text-pink-700">Portfolio in development</span>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl shadow-blue-500/10 overflow-hidden relative group">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader className="relative">
        <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <ImageIcon className="w-5 h-5 text-white" />
          </div>
          Portfolio
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioUrls.map((url, index) => (
            <motion.div
              key={index}
              className="group/item relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
            >
              <img
                src={url}
                alt={`Portfolio item ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm font-medium">View Project</span>
                    </div>
                    <Heart className="w-4 h-4 hover:fill-current transition-all duration-200 cursor-pointer" />
                  </div>
                </div>
              </div>
              
              {/* Hover action button */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/item:translate-y-0 shadow-lg hover:shadow-xl cursor-pointer">
                <ExternalLink className="w-4 h-4 text-gray-700" />
              </div>
              
              {/* Project number badge */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Portfolio stats */}
        <motion.div
          className="mt-8 grid grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl border border-pink-200/50">
            <div className="text-2xl font-bold text-gray-900">{portfolioUrls.length}</div>
            <div className="text-sm text-gray-600">Projects</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
            <div className="text-2xl font-bold text-gray-900">4.9</div>
            <div className="text-sm text-gray-600">Avg Rating</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200/50">
            <div className="text-2xl font-bold text-gray-900">100%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}