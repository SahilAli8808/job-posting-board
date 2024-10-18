import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Users, Phone, Building2, Mail } from 'lucide-react'

const SignUpPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col">
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-600">Cuvette</div>
          <nav>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto mt-8 flex gap-8">
        {/* Left side content */}
        <div className="flex-1 pr-8 pt-12">
          <p className="text-gray-600 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley
          </p>
        </div>

        {/* Sign Up Form */}
        <div className="w-full max-w-md">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Sign Up</CardTitle>
              <p className="text-sm text-gray-500 text-center">
                Lorem Ipsum is simply dummy text
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input 
                      type="text" 
                      placeholder="Name" 
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input 
                      type="tel" 
                      placeholder="Phone no." 
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input 
                      type="text" 
                      placeholder="Company Name" 
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input 
                      type="email" 
                      placeholder="Company Email" 
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input 
                      type="text" 
                      placeholder="Employee Size" 
                      className="pl-10"
                    />
                  </div>
                </div>

                <p className="text-sm text-center text-gray-500">
                  By clicking on proceed you will accept our{' '}
                  <a href="/terms" className="text-blue-600 hover:underline">
                    Terms & Conditions
                  </a>
                </p>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Proceed
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SignUpPage;