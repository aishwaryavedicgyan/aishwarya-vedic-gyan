import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Mail, Phone, User } from 'lucide-react';

type TimeSlot = {
  id: number;
  time: string;
  available: boolean;
};

const timeSlots: TimeSlot[] = [
  { id: 1, time: "09:00 AM", available: true },
  { id: 2, time: "10:00 AM", available: true },
  { id: 3, time: "11:00 AM", available: true },
  { id: 4, time: "02:00 PM", available: true },
  { id: 5, time: "03:00 PM", available: true },
  { id: 6, time: "04:00 PM", available: true },
];

export function Appointment() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultationType: 'career',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/book-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          date: selectedDate,
          time: selectedTime,
        }),
      });

      if (response.ok) {
        alert('Appointment booked successfully!');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          consultationType: 'career',
          message: ''
        });
        setSelectedDate('');
        setSelectedTime('');
      } else {
        throw new Error('Failed to book appointment');
      }
    } catch (error) {
      alert('Failed to book appointment. Please try again.');
    }
  };

  return (
    <div className="py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Book a
            <span className="gradient-text"> Consultation</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Schedule a personal consultation with our expert astrologers
          </p>
        </div>

        <motion.form 
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                <User className="inline-block w-4 h-4 mr-2" />
                Name
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                <Mail className="inline-block w-4 h-4 mr-2" />
                Email
              </label>
              <input
                type="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                <Phone className="inline-block w-4 h-4 mr-2" />
                Phone
              </label>
              <input
                type="tel"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Consultation Type
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.consultationType}
                onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
              >
                <option value="career">Career</option>
                <option value="relationship">Relationship</option>
                <option value="health">Health</option>
                <option value="general">General</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                <Calendar className="inline-block w-4 h-4 mr-2" />
                Date
              </label>
              <input
                type="date"
                required
                min={new Date().toISOString().split('T')[0]}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                <Clock className="inline-block w-4 h-4 mr-2" />
                Time
              </label>
              <div className="mt-1 grid grid-cols-2 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    type="button"
                    className={`py-2 px-4 rounded-md text-sm ${
                      selectedTime === slot.time
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedTime(slot.time)}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Message (Optional)
              </label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Book Consultation
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
} 