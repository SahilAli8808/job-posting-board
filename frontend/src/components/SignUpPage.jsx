import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Users, Phone, Building2, Mail } from 'lucide-react';
import toast from 'react-hot-toast';
import { MobileIcon } from '@radix-ui/react-icons';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    companyName: '',
    email: '',
    employeeSize: '',
    password: ''
  });
  
  const [isRegistered, setIsRegistered] = useState(false);
  const [otpData, setOtpData] = useState({
    emailOtp: '',
    mobileOtp: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOtpChange = (e) => {
    const { name, value } = e.target;
    setOtpData({ ...otpData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}api/auth/register`, {
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        companyName: formData.companyName,
        email: formData.email,
        employeeSize: formData.employeeSize,
        password: formData.password
      });
      console.log('User registered:', response.data);
      toast.success('User registered successfully');
      setIsRegistered(true); // Show OTP verification card
    } catch (error) {
      console.error('Error registering user:', error);
      toast.error('Error registering user');
      // Handle error (e.g., show an error message)
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    // Handle OTP verification logic here
    console.log('Verifying OTP:', otpData);
    // You can send the OTP data to your server for verification
  };

  return (
    <div className="p-4 flex flex-col">
      {/* Header */}
      <header className="w-full max-w-7xl ">
        <div className="flex justify-between items-center py-4 mx-5">
          {/* Logo */}
          <div className="w-[121px] h-[30px] opacity-100">
            <a href="/">
              <img src="/src/assets/logo.svg" alt="Cuvette Logo" className="w-full h-full" />
            </a>
          </div>
          <nav>
            <a href="/contact" className="text-gray-600 hover:text-gray-900 size-6">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto mt-4 flex gap-8">
        {/* Left side content */}
        <div className="flex-1 pl-4 pr-12 pt-40">
          <p className="text-gray-600 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley
          </p>
        </div>

        {/* Sign Up Form */}
        {!isRegistered && (
        <div className="w-[400px] pr-10">
          {/* Card with gradient border */}
          <Card 
            className="rounded-md border bg-transparent"
            style={{
              borderImage: 'linear-gradient(90deg, #3F71FF 0%, #AA54FF 100%) 1',
      
            }}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Sign Up</CardTitle>
              <p className="text-sm text-gray-500 text-center">
                Lorem Ipsum is simply dummy text
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div className="space-y-2">
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input 
                      type="text" 
                      name="name"
                      placeholder="Name" 
                      className="pl-10 bg-[#F4F4F4]"
                      onChange={handleChange}
                      value={formData.name}
                    />
                  </div>
                </div>

                {/* Phone Number Input */}
                <div className="space-y-1">
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input 
                      type="tel" 
                      name="phoneNumber"
                      placeholder="Phone no." 
                      className="pl-10 bg-[#F4F4F4]"
                      onChange={handleChange}
                      value={formData.phoneNumber}
                    />
                  </div>
                </div>

                {/* Company Name Input */}
                <div className="space-y-1">
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input 
                      type="text" 
                      name="companyName"
                      placeholder="Company Name" 
                      className="pl-10 bg-[#F4F4F4]"
                      onChange={handleChange}
                      value={formData.companyName}
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-1">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input 
                      type="email" 
                      name="email"
                      placeholder="Company Email" 
                      className="pl-10 bg-[#F4F4F4]"
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </div>
                </div>

                {/* Employee Size Input */}
                <div className="space-y-1">
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input 
                      type="text" 
                      name="employeeSize"
                      placeholder="Employee Size" 
                      className="pl-10 bg-[#F4F4F4]"
                      onChange={handleChange}
                      value={formData.employeeSize}
                    />
                  </div>
                </div>

                <p className="text-sm text-center text-gray-500">
                  By clicking on proceed you will accept our{' '}
                  <a href="/terms" className="text-blue-600 hover:underline">
                    Terms & Conditions
                  </a>
                </p>

                <Button type="submit" className="w-full bg-[#0B66EF] hover:bg-blue-700">
                  Proceed
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        )}

        {/* OTP Verification Card */}
        {isRegistered && (
          <div className="w-[400px] pr-10 mt-4">
            <Card 
              className="rounded-md border bg-transparent"
              style={{
                borderImage: 'linear-gradient(90deg, #3F71FF 0%, #AA54FF 100%) 1',
              }}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">OTP Verification</CardTitle>
                <p className="text-sm text-gray-500 text-center">
                  Lorem Ipsum is simply dummy text
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  {/* Email OTP Input */}
                  <div className="space-y-1">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input 
                      type="text" 
                      name="emailOtp"
                      placeholder="Email OTP" 
                      className="pl-10 mb-8 bg-[#F4F4F4]"
                      onChange={handleOtpChange}
                      value={otpData.emailOtp}
                    />
                  </div>
                  </div>

                

                  <Button type="submit" className="w-full bg-[#0B66EF] hover:bg-blue-700">
                    Verify Email OTP
                  </Button>

                  {/* Mobile OTP Input */}
                  <div className="space-y-1">
                  <div className="relative">
                  <MobileIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input 
                      type="text" 
                      name="mobileOtp"
                      placeholder="Mobile OTP" 
                      className="bg-[#F4F4F4]"
                      onChange={handleOtpChange}
                      value={otpData.mobileOtp}
                    />
                  </div>
                  </div>

                  <Button type="submit" className="w-full bg-[#0B66EF] hover:bg-blue-700">
                    Verify Mobile OTP
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default SignUpPage;
