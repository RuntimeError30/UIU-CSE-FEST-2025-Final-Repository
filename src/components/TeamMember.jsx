import React from 'react';
import { Link } from 'react-router-dom';

const TeamMember = ({ name, role, subRole, imageSrc, link }) => {
  return (
    <Link to={link} >
    <div className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-lg overflow-hidden transition-all duration-300 hover:border-orange-500 group">
      <div className="p-6">
        <div className="aspect-square mb-6 overflow-hidden rounded-xl bg-orange-500 relative">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className="font-zentry text-2xl font-bold text-orange-500">
          {name}
        </h3>
        <p className="font-robert-regular text-sm text-gray-300 mt-1">{role}</p>
        {subRole && <p className=" font-robert-regular text-sm text-gray-400 mt-2">{subRole}</p>}
      </div>
    </div>
    </Link>
  );
};

export default TeamMember;

