'use client';

import React, { useState } from 'react';
import {
  Shield,
  HealthAndSafety,
  AttachMoney,
  NotificationsActive,
  VerifiedUser,
  TrendingDown,
  Lightbulb,
  LocalHospital,
  Info,
  School,
  CallReceived
} from '@mui/icons-material';

export default function WhatWeProvide() {
  const [activeService, setActiveService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Bonds & Service Rules',
      icon: Shield,
      description: 'Complete information about bonds and service rules',
      position: 'top-left'
    },
    {
      id: 2,
      title: 'Broad & Super Speciality Info',
      icon: HealthAndSafety,
      description: 'Detailed speciality information for all colleges',
      position: 'top-center'
    },
    {
      id: 3,
      title: 'Updated Fees Structure',
      icon: AttachMoney,
      description: 'Latest fee details and payment information',
      position: 'top-right'
    },
    {
      id: 4,
      title: 'Karnataka State Counselling Notifications',
      icon: NotificationsActive,
      description: 'Stay updated with latest KEA notifications',
      position: 'left'
    },
    {
      id: 5,
      title: 'Accreditations and Affiliations',
      icon: VerifiedUser,
      description: 'Verified college credentials and affiliations',
      position: 'right'
    },
    {
      id: 6,
      title: 'Category wise Cut-off',
      icon: TrendingDown,
      description: 'Category-specific cutoff analysis and trends',
      position: 'bottom-left'
    },
    {
      id: 7,
      title: 'Most Accurate Counselling Predictor',
      icon: Lightbulb,
      description: 'AI-powered predictions for college selection',
      position: 'bottom-center'
    },
    {
      id: 8,
      title: 'Hospital Patient Flow Details',
      icon: LocalHospital,
      description: 'Information about college hospital facilities',
      position: 'bottom-right'
    }
  ];

  const handleServiceClick = (service) => {
    setActiveService(service);
  };

  const handleCloseModal = () => {
    setActiveService(null);
  };

  return (
    <div className="w-full bg-white py-16 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            What We Provide ?
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Karnataka-focused admission support — college details, KEA counselling notifications, predictor, cut-offs, fees, bonds and more.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Side - Services Grid (3 columns) */}
          <div className="lg:col-span-2 pt-[50px]">
            <div className="grid grid-cols-3 gap-6 relative">
              {/* Top Row */}
              {services.slice(0, 3).map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    onClick={() => handleServiceClick(service)}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                    className="bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 border border-red-300  cursor-pointer group"
                  >
                    <div className="text-3xl md:text-4xl mb-3 text-blue-600 group-hover:text-red-700 transition-colors">
                      <IconComponent fontSize="large" className='bg-gray-200 p-2' />
                    </div>
                    <h3 className="text-gray-900 font-bold text-xs md:text-sm leading-tight">
                      {service.title}
                    </h3>
                  </div>
                );
              })}

              {/* Middle Row with Center Circle */}
              <div className="flex flex-col items-center justify-center">
                <div
                  onClick={() => handleServiceClick(services[3])}
                  onMouseEnter={() => setHoveredService(services[3].id)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 border border-red-300 cursor-pointer group"
                >
                  <div className="text-3xl md:text-4xl mb-3 text-blue-600 group-hover:text-red-700 transition-colors">
                    <NotificationsActive fontSize="large"  className='bg-gray-200 p-2' />
                  </div>
                  <h3 className="text-gray-900 font-bold text-xs md:text-sm leading-tight text-center">
                    {services[3].title}
                  </h3>
                </div>
              </div>

              {/* Center Circle - Active Button */}
              <div className="flex items-center justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-2xl cursor-pointer hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="text-white text-3xl md:text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                      <Lightbulb  />
                    </div>
                    <p className="text-white font-bold text-xs md:text-lg text-center leading-tight">
                      What We<br />Provide
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Middle */}
              <div className="flex flex-col items-center justify-center">
                <div
                  onClick={() => handleServiceClick(services[4])}
                  onMouseEnter={() => setHoveredService(services[4].id)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 border border-red-300  cursor-pointer group"
                >
                  <div className="text-3xl md:text-4xl mb-3 text-blue-600 group-hover:text-red-700 transition-colors">
                    <VerifiedUser fontSize="large" className='bg-gray-200 p-2'/>
                  </div>
                  <h3 className="text-gray-900 font-bold text-xs md:text-sm leading-tight text-center">
                    {services[4].title}
                  </h3>
                </div>
              </div>

              {/* Bottom Row */}
              {services.slice(5, 8).map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    onClick={() => handleServiceClick(service)}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                    className="bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 border border-red-300  cursor-pointer group"
                  >
                    <div className="text-3xl md:text-4xl mb-3  text-blue-600 group-hover:text-red-700 transition-colors">
                      <IconComponent fontSize="large" className='bg-gray-200 p-2' />
                    </div>
                    <h3 className="text-gray-900 font-bold text-xs md:text-sm leading-tight">
                      {service.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Box Container with Image and Trust Indicators */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden h-full flex flex-col">
              {/* Professional Image Section */}
              <div className="relative bg-gradient-to-br from-blue-50 via-orange-50 to-pink-50 p-8 flex-1 flex items-center justify-center min-h-[200px]">
                {/* Decorative circular background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-60 rounded-full bg-gradient-to-br from-orange-100 to-pink-100 opacity-40 blur-3xl"></div>
                </div>

                {/* Image Container */}
                <div className="relative z-10 flex justify-center items-center">
                  {/* Replace this with your actual image */}
                  <div className="relative">
                    <img 
                      src="/images/banner-2.jpg" 
                      alt="Professional Expert" 
                      className="w-100 h-95 object-cover rounded-2xl"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-64 h-96 bg-gradient-to-br from-blue-100 to-gray-100 rounded-2xl flex items-center justify-center border-2 border-red-300  relative overflow-hidden shadow-lg">
                            <div class="text-center">
                              <div class="text-6xl text-blue-600 mb-4">👩‍💼</div>
                              <p class="text-gray-600 text-sm font-medium">Professional image</p>
                            </div>
                          </div>
                        `;
                      }}
                    />

                    {/* Animated sparkles */}
                    <div className="absolute -top-4 -right-4 text-orange-400 text-3xl animate-pulse">✨</div>
                    <div className="absolute top-12 -right-8 text-orange-300 text-lg animate-pulse" style={{ animationDelay: '0.3s' }}>✦</div>
                    <div className="absolute bottom-20 -right-6 text-orange-300 text-2xl animate-pulse" style={{ animationDelay: '0.6s' }}>✦</div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators at Bottom */}
              <div className="bg-white border-t border-gray-100 p-6">
                <div className="grid grid-cols-3 gap-4">
                  {/* Trusted Information */}
                  <div className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <Shield className="text-red-700" fontSize="small" />
                      </div>
                      <p className="text-gray-900 font-bold text-xs md:text-sm">Trusted<br />Information</p>
                    </div>
                  </div>

                  {/* Expert Guidance */}
                  <div className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <Info className="text-red-700" fontSize="small" />
                      </div>
                      <p className="text-gray-900 font-bold text-xs md:text-sm">Expert<br />Guidance</p>
                    </div>
                  </div>

                  {/* End-to-End Support */}
                  <div className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <CallReceived className="text-red-700" fontSize="small" />
                      </div>
                      <p className="text-gray-900 font-bold text-xs md:text-sm">End-to-End<br />Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}