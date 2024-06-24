'use client'; // Ensure this is treated as a client component

import { Mail, Phone, Linkedin, Instagram, LucideIcon } from 'lucide-react';

interface StudentCardProps {
  name: string;
  lastName: string;
  major: string;
  description: string;
  email: string;
  phone: string;
  linkedIn: string;
  instagram: string;
  icon: LucideIcon;
}

export const StudentCard = ({
  name,
  lastName,
  major,
  description,
  email,
  phone,
  linkedIn,
  instagram,
  icon: Icon,
}: StudentCardProps) => {
  return (
    <div className="border rounded-md p-4 flex flex-col items-start space-y-2 ">
      <div className="flex items-center gap-x-2 mb-2">
        <Icon className="text-gray-500" />
        <h2 className="font-bold text-xl">
          {name} {lastName}
        </h2>
      </div>
      <p className="text-gray-600 font-semibold">{major}</p>
      <p className="text-gray-500 mb-2">{description}</p>
      <div className="text-gray-500 flex items-center space-x-2">
        <Mail className="mr-1" />
        <span>{email}</span>
      </div>
      <div className="text-gray-500 flex items-center space-x-2">
        <Phone className="mr-1" />
        <span>{phone}</span>
      </div>
      <div className="text-gray-500 flex items-center space-x-2">
        <Linkedin className="text-gray-500 mr-1" />
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-500 hover:underline"
        >
          LinkedIn
        </a>
      </div>
      <div className="text-gray-500 flex items-center space-x-2">
        <Instagram className="text-gray-500 mr-1" />
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500  hover:underline hover:text-pink-500"
        >
          Instagram
        </a>
      </div>
    </div>
  );
};
