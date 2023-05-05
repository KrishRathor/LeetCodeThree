import React from 'react'

const Footer = () => {
    return (
        <footer className="sticky bg-gray-100 py-4 mb-0">
            <div className="container mx-auto flex justify-between items-center text-sm">
                <div>
                    © 2022 My Website. All Rights Reserved.
                </div>
                <div>
                    <span>Country: United States</span>
                </div>
                <div>
                    <span>Terms of Service</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
