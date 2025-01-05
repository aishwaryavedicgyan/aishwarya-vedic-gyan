import React from 'react';
import { ChevronDown } from 'lucide-react';

type NavItemProps = {
  label: string;
  hasDropdown?: boolean;
  href?: string;
};

export function NavItem({ label, hasDropdown, href }: NavItemProps) {
  return (
    <div className="relative group">
      <a 
        href={href || '#'} 
        className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600"
      >
        {label}
        {hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
      </a>
    </div>
  );
}