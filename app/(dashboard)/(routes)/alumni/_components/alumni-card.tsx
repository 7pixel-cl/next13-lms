import { LucideIcon } from "lucide-react";
import { IconBadge } from "@/components/icon-badge";
import Link from 'next/link';

interface AlumniCardProps {
  numberOfAlumni: number;
  variant?: "default" | "success";
  label: string;
  icon: LucideIcon;
  generation: string;
}

export const AlumniCard = ({
  variant,
  icon: Icon,
  numberOfAlumni,
  label,
  generation
}: AlumniCardProps) => {
  return (
    <Link href={`/alumni/${generation}`} passHref>
      <div className="border rounded-md flex items-center gap-x-2 p-3 hover:bg-gray-100 cursor-pointer">
        <IconBadge
          variant={variant}
          icon={Icon}
        />
        <div>
          <p className="font-medium">
            {generation} - {label}
          </p>
          <p className="text-gray-500 text-sm">
            {numberOfAlumni} {numberOfAlumni === 1 ? "Alumnus" : "Alumni"}
          </p>
        </div>
      </div>
    </Link>
  );
};
