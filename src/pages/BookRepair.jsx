import { useState } from 'react';
import { motion } from 'framer-motion';

function BookRepair() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    device: '',
    brand: '',
    issue: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(4); // Show confirmation
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  return (
    <div className="py-12">
      <div className="container-custom max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-md p-8"
        >
          <h1 className="text-3xl font-bold text-center mb-8">Book a Repair</h1>

          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`flex-1 text-center ${
                  step >= num ? 'text-primary' : 'text-gray-400'
                }`}
              >
                <div
                  className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center border-2 ${
                    step >= num
                      ? 'border-primary bg-primary text-white'
                      : 'border-gray-300'
                  }`}
                >
                  {num}
                </div>
                <div className="mt-2">
                  {num === 1 && 'Device Details'}
                  {num === 2 && 'Schedule'}
                  {num === 3 && 'Contact Info'}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Device Details */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Device Type
                  </label>
                  <select
                    name="device"
                    value={formData.device}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                    required
                  >
                    <option value="">Select Device</option>
                    <option value="smartphone">Smartphone</option>
                    <option value="tablet">Tablet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Brand
                  </label>
                  <select
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                    required
                  >
                    <option value="">Select Brand</option>
                    <option value="apple">Apple</option>
                    <option value="samsung">Samsung</option>
                    <option value="google">Google</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Issue
                  </label>
                  <select
                    name="issue"
                    value={formData.issue}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                    required
                  >
                    <option value="">Select Issue</option>
                    <option value="screen">Screen Damage</option>
                    <option value="battery">Battery Issues</option>
                    <option value="charging">Charging Problems</option>
                  </select>
                </div>
              </motion.div>
            )}

            {/* Step 2: Schedule */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                    required
                  >
                    <option value="">Select Time</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 7PM)</option>
                  </select>
                </div>
              </motion.div>
            )}

            {/* Step 3: Contact Information */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                    required
                  />
                </div>
              </motion.div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center space-y-4"
              >
                <div className="text-5xl mb-4">✅</div>
                <h2 className="text-2xl font-bold text-primary">
                  Booking Confirmed!
                </h2>
                <p className="text-gray-600">
                  Thank you for booking with us. We'll send you a confirmation
                  email shortly with your booking details.
                </p>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            {step < 4 && (
              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="btn-secondary"
                  >
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-primary ml-auto"
                  >
                    Next
                  </button>
                ) : (
                  <button type="submit" className="btn-primary ml-auto">
                    Submit
                  </button>
                )}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default BookRepair;