const TrovoPhoneMockup: React.FC = () => {
  return (
    <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 h-[420px] sm:h-[480px] md:h-[540px] lg:h-[600px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-1.5 sm:p-2 md:p-3 shadow-2xl mx-auto">
      {/* Screen */}
      <div className="w-full h-full bg-white rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
        {/* Status Bar */}
        <div className="h-5 sm:h-6 md:h-8 bg-gray-100 flex items-center justify-between px-2 sm:px-3 md:px-6 text-xs font-medium text-gray-900">
          <span className="text-xs">9:41</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 sm:w-3 md:w-4 h-1 sm:h-1.5 md:h-2 bg-trovo-green rounded-sm"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-3 sm:w-4 md:w-6 h-1.5 sm:h-2 md:h-3 border border-gray-400 rounded-sm">
              <div className="w-2 sm:w-3 md:w-4 h-0.5 sm:h-1 md:h-2 bg-trovo-green rounded-sm m-0.5"></div>
            </div>
          </div>
        </div>

        {/* App Content - Credit Card Payment Interface */}
        <div className="h-full bg-gradient-to-br from-gray-50 via-white to-trovo-green/5 relative overflow-hidden">
          {/* Header */}
          <div className="p-2 sm:p-3 md:p-4 lg:p-6 pb-1 sm:pb-2 md:pb-3 lg:pb-4">
            <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4 lg:mb-6">
              <div className="flex items-center">
                <button className="mr-3 p-1 text-gray-600" aria-label="Go back">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900">
                  Payment
                </h3>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-gray-600" aria-hidden="true">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Amount */}
          <div className="px-2 sm:px-3 md:px-4 lg:px-6 mb-3 sm:mb-4 md:mb-6">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-1">Amount to pay</p>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">₹2,450.00</p>
              <div className="flex items-center justify-center mt-1 text-xs text-trovo-green" aria-live="polite">
                <span className="sr-only">Rewards available:</span>
                <span>+245 points will be earned</span>
              </div>
            </div>
          </div>
          
          {/* Credit Card */}
          <div className="px-2 sm:px-3 md:px-4 lg:px-6 mb-3 sm:mb-4 md:mb-6">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 text-white shadow-xl relative overflow-hidden">
              {/* Card Background Pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-trovo-green/10 rounded-full transform translate-x-8 -translate-y-8"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-yellow-400/10 rounded-full transform -translate-x-6 translate-y-6"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div className="text-xs text-gray-300">TROVO CARD</div>
                  <div className="flex space-x-1" aria-hidden="true">
                    <div className="w-5 h-3 bg-red-500 rounded-sm opacity-90"></div>
                    <div className="w-5 h-3 bg-yellow-400 rounded-sm opacity-90"></div>
                  </div>
                </div>
                <div className="mb-2 sm:mb-3">
                  <p className="text-xs sm:text-sm font-mono tracking-wider">
                    •••• •••• •••• 1234
                  </p>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-gray-300 mb-0.5">Card Holder</p>
                    <p className="text-xs font-medium">PRADEEP KUMAR</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-300 mb-0.5">Expires</p>
                    <p className="text-xs font-medium">12/28</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="px-2 sm:px-3 md:px-4 lg:px-6 space-y-2 sm:space-y-3">
            {/* CVV Input */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">CVV</label>
              <div className="relative">
                <input 
                  type="password" 
                  placeholder="•••"
                  className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:ring-2 focus:ring-trovo-green focus:border-transparent"
                  maxLength={3}
                />
                <div className="absolute right-3 top-2 text-gray-400" aria-hidden="true">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M12 7C13.1 7 14 7.9 14 9C14 10.1 13.1 11 12 11C10.9 11 10 10.1 10 9C10 7.9 10.9 7 12 7Z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Save Card Toggle */}
            <div className="flex items-center justify-between py-1">
              <span className="text-xs text-gray-600">Save card for future payments</span>
              <div className="w-8 h-4 bg-trovo-green rounded-full relative">
                <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm" />
              </div>
            </div>
          </div>

          {/* Payment Button */}
          <div className="absolute bottom-4 left-2 right-2 sm:left-3 sm:right-3 md:left-4 md:right-4 lg:left-6 lg:right-6">
            <button 
              className="w-full bg-gradient-to-r from-trovo-green to-emerald-600 text-white py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm shadow-lg hover:opacity-95 transition-colors"
            >
              <div className="flex items-center justify-center">
                <span>Pay ₹2,450.00</span>
              </div>
            </button>
          </div>

          {/* Static accents */}
          <div className="absolute top-16 right-4 w-1 h-1 bg-trovo-green rounded-full opacity-60" />
          <div className="absolute bottom-20 left-4 w-0.5 h-0.5 bg-yellow-400 rounded-full opacity-60" />
        </div>
      </div>

      {/* Phone details */}
      <div className="absolute -top-0.5 sm:-top-1 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-0.5 sm:h-1 bg-gray-600 rounded-full"></div>
      <div className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 w-8 sm:w-12 h-0.5 sm:h-1 bg-gray-600 rounded-full"></div>
    </div>
  )
}

export default TrovoPhoneMockup
