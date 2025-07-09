import React from 'react';
import { MapPin, Clock, CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { IProfessional } from '../../types';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Rating } from '../ui/Rating';
import { Card } from '../ui/Card';

interface ProfessionalCardProps {
  professional: IProfessional;
  onViewProfile: (id: string) => void;
  onBookNow: (id: string) => void;
  index?: number;
}

export const ProfessionalCard: React.FC<ProfessionalCardProps> = ({
  professional,
  onViewProfile,
  onBookNow,
  index = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card hover className="p-6 group">
        <div className="flex items-start gap-4 mb-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Avatar 
              src={professional.avatar} 
              alt={professional.name || 'Professional'} 
              size="lg"
            />
          </motion.div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <motion.h3
                className="font-bold text-gray-900 truncate text-lg"
                whileHover={{ color: '#2563eb' }}
              >
                {professional.name}
              </motion.h3>
              {professional.verified && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                </motion.div>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-2 font-medium">{professional.title}</p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="primary" size="sm" className="mb-3">
                {professional.specialty}
              </Badge>
            </motion.div>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
              <Rating rating={professional.rating} size="sm" />
              <span className="font-medium">({professional.total_reviews} reviews)</span>
            </div>
          </div>
        </div>

        <motion.p
          className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {professional.bio}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {professional.languages.slice(0, 3).map((language, idx) => (
            <motion.div
              key={language}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
            >
              <Badge variant="secondary" size="sm">
                {language}
              </Badge>
            </motion.div>
          ))}
          {professional.languages.length > 3 && (
            <Badge variant="secondary" size="sm">
              +{professional.languages.length - 3} more
            </Badge>
          )}
        </motion.div>

        <div className="flex items-center justify-between mb-4">
          <motion.div
            className="flex items-baseline gap-1"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              {professional.currency}{professional.hourly_rate}
            </span>
            <span className="text-sm text-gray-500 font-medium">/hour</span>
          </motion.div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onViewProfile(professional.id)}
            >
              View Profile
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => onBookNow(professional.id)}
            >
              Book Now
            </Button>
          </div>
        </div>

        <motion.div
          className="pt-4 border-t border-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <motion.div
                className={`w-2 h-2 rounded-full ${
                  professional.availability_status ? 'bg-green-500' : 'bg-gray-400'
                }`}
                animate={{
                  scale: professional.availability_status ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 2,
                  repeat: professional.availability_status ? Infinity : 0,
                }}
              />
              <span className={`font-medium ${
                professional.availability_status ? 'text-green-600' : 'text-gray-500'
              }`}>
                {professional.availability_status ? 'Available' : 'Busy'}
              </span>
            </div>
            <span className="text-gray-500 font-medium">
              {professional.total_sessions} sessions completed
            </span>
          </div>
        </motion.div>
      </Card>
    </motion.div>
  );
};