'use client';
import React, { useState, useMemo } from 'react';
import {
  GraduationCap,
  Instagram,
  LayoutGridIcon,
  Linkedin,
  ListIcon,
} from 'lucide-react'; // Replace with an actual icon from lucide-react
import { StudentCard } from './components/student-card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface Student {
  name: string;
  lastName: string;
  major: string;
  description: string;
  email: string;
  phone: string;
  linkedIn: string;
  instagram: string;
}

interface GenerationPageProps {
  params: {
    generation: string;
  };
}

const StudentTable: React.FC<{ students: Student[] }> = ({ students }) => {
  return (
    <table className="min-w-full leading-normal">
      <thead>
        <tr>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Name
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Major
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Email
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Phone
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Social
          </th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index} className="hover:bg-gray-100">
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <div className="font-bold text-gray-900">
                {student.name} {student.lastName}
              </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-700 whitespace-no-wrap">
                {student.major}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-700 whitespace-no-wrap">
                {student.email}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-700 whitespace-no-wrap">
                {student.phone}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex items-center">
              <a
                href={student.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                <Linkedin className="h-6 w-6 text-gray-600 hover:text-blue-600" />
              </a>
              <a
                href={student.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const GenerationPage: React.FC<GenerationPageProps> = ({ params }) => {
  const { generation } = params;
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMajor, setFilterMajor] = useState('');
  const [viewMode, setViewMode] = useState<'card' | 'list'>('card');

  // Mock data for 8 students

  const filteredStudents = useMemo(() => {
    const students: Student[] = [
      {
        name: 'John',
        lastName: 'Doe',
        major: 'Computer Science',
        description:
          'A passionate developer with experience in full stack development.',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        linkedIn: 'https://linkedin.com/in/johndoe',
        instagram: 'https://instagram.com/johndoe',
      },
      {
        name: 'Jane',
        lastName: 'Smith',
        major: 'Marketing',
        description:
          'A creative marketer with a knack for social media strategies.',
        email: 'jane.smith@example.com',
        phone: '123-456-7890',
        linkedIn: 'https://linkedin.com/in/janesmith',
        instagram: 'https://instagram.com/janesmith',
      },
      {
        name: 'Alice',
        lastName: 'Johnson',
        major: 'Computer Science',
        description:
          'Passionate about software development and machine learning.',
        email: 'alice.johnson@example.com',
        phone: '321-654-0987',
        linkedIn: 'https://linkedin.com/in/alicejohnson',
        instagram: 'https://instagram.com/alicejohnson',
      },
      {
        name: 'Bob',
        lastName: 'Williams',
        major: 'Electrical Engineering',
        description:
          'Innovative thinker with a love for robotics and circuit design.',
        email: 'bob.williams@example.com',
        phone: '456-789-0123',
        linkedIn: 'https://linkedin.com/in/bobwilliams',
        instagram: 'https://instagram.com/bobwilliams',
      },
      {
        name: 'Carol',
        lastName: 'Davis',
        major: 'Mathematics',
        description:
          'Dedicated to solving complex problems and advancing mathematical theory.',
        email: 'carol.davis@example.com',
        phone: '789-012-3456',
        linkedIn: 'https://linkedin.com/in/caroldavis',
        instagram: 'https://instagram.com/caroldavis',
      },
      {
        name: 'David',
        lastName: 'Miller',
        major: 'Physics',
        description:
          'Exploring the mysteries of the universe through experimental physics.',
        email: 'david.miller@example.com',
        phone: '012-345-6789',
        linkedIn: 'https://linkedin.com/in/davidmiller',
        instagram: 'https://instagram.com/davidmiller',
      },
      {
        name: 'Eve',
        lastName: 'Wilson',
        major: 'Chemistry',
        description:
          'Passionate about green chemistry and sustainable materials.',
        email: 'eve.wilson@example.com',
        phone: '234-567-8901',
        linkedIn: 'https://linkedin.com/in/evewilson',
        instagram: 'https://instagram.com/evewilson',
      },
      {
        name: 'Frank',
        lastName: 'Brown',
        major: 'Biology',
        description:
          'Exploring the building blocks of life to solve global health issues.',
        email: 'frank.brown@example.com',
        phone: '567-890-1234',
        linkedIn: 'https://linkedin.com/in/frankbrown',
        instagram: 'https://instagram.com/frankbrown',
      },
    ];

    return students.filter((student) => {
      return (
        (student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.major.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (filterMajor ? student.major === filterMajor : true)
      );
    });
  }, [searchTerm, filterMajor]);
  const [value, setValue] = React.useState('');
  return (
    <div className="m-4">
      <h1 className="text-2xl font-bold mb-4">Alumni of {generation}</h1>
      <div className="flex justify-between items-center my-4">
        <div className="flex items-center">
          <Input
            placeholder="Search by name or major..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64 m-4"
          />

          <Select value={filterMajor} onValueChange={setFilterMajor}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Major" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Majors</SelectLabel>

                <SelectItem value="Computer Science">
                  Computer Science
                </SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
                <SelectItem value="Electrical Engineering">
                  Electrical Engineering
                </SelectItem>
                <SelectItem value="Mathematics">Mathematics</SelectItem>
                <SelectItem value="Physics">Physics</SelectItem>
                <SelectItem value="Chemistry">Chemistry</SelectItem>
                <SelectItem value="Biology">Biology</SelectItem>
              </SelectGroup>
              <Button
                className="w-full px-2"
                variant="secondary"
                size="sm"
                onClick={(e) => setFilterMajor('')}
              >
                Clear
              </Button>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant={viewMode === 'card' ? 'default' : 'secondary'}
            onClick={() => setViewMode('card')}
          >
            <LayoutGridIcon className="w-5 h-5 mr-2" />
            Card View
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'secondary'}
            onClick={() => setViewMode('list')}
          >
            <ListIcon className="w-5 h-5 mr-2" />
            List View
          </Button>
        </div>
      </div>
      {viewMode === 'card' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
          {filteredStudents.map((student, index) => (
            <StudentCard
              key={index}
              icon={GraduationCap}
              name={student.name}
              lastName={student.lastName}
              major={student.major}
              description={student.description}
              email={student.email}
              phone={student.phone}
              linkedIn={student.linkedIn}
              instagram={student.instagram}
            />
          ))}
        </div>
      ) : (
        <StudentTable students={filteredStudents} />
      )}
    </div>
  );
};

export default GenerationPage;
