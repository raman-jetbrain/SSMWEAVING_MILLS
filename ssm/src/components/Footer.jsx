import React from 'react'

const Footer = () => {
  return (
      <>
    <footer className="bg-gray-800 text-white py-4 rounded-t-2xl">



        <div className="flex justify-between items-center space-x-2.5 w-160">
        
        <div className="container mx-auto text-center mt-4">
            <strong>
            <p className="text-sm">Company </p>
            <p className="text-sm">Home </p>
            <p className="text-sm">About </p>
            <p className="text-sm">Services </p>
            <p className="text-sm">Products </p>
            <p className="text-sm">Contact </p>
            </strong>
        </div>

          
        <div className="container mx-auto text-center mt-4">
            <p className="text-sm">Contact us:</p>
            <p className="text-sm">Email: </p>
            <p className="text-sm">Phone: </p>
        </div>

          
        <div className="container mx-auto text-center mt-4">
            <p className="text-sm">Contact us:</p>
            <p className="text-sm">Email: </p>
            <p className="text-sm">Phone: </p>
        </div>

          
        <div className="container mx-auto text-center mt-4">
            <p className="text-sm">Contact us:</p>
            <p className="text-sm">Email: </p>
            <p className="text-sm">Phone: </p>
        </div>
    </div>
     <div className="container mx-auto text-end">
            <p className="text-sm">Follow us on social media:</p>
            <div className="flex justify-end space-x-4  mt-2">
                <a href="#" className="hover:text-gray-400">Facebook</a>
                <a href="#" className="hover:text-gray-400">Twitter</a>
                <a href="#" className="hover:text-gray-400">Instagram</a>
            </div>
        </div>

      <div className="container mx-auto text-center rounded-2xl">
        <p>&copy; {new Date().getFullYear()} SSM Weaving Mills. All rights reserved.</p>
      </div>
    </footer>
      </>
  )
}

export default Footer
