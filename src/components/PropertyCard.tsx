import { Bed, Bath, MapPin } from 'lucide-react';
import { Property } from '../data/properties';
import Button from './Button';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-56 bg-slate-200 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-slate-400">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-2 opacity-50" />
            <p className="text-sm">Property Image</p>
          </div>
        </div>
        {property.featured && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              {property.address}
            </h3>
            <p className="text-slate-600 text-sm flex items-center gap-1">
              <MapPin size={14} />
              {property.location}
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-slate-900">
              {property.priceDisplay}
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {property.description}
        </p>

        <div className="flex items-center gap-4 mb-4 text-slate-600">
          <div className="flex items-center gap-1">
            <Bed size={18} />
            <span className="text-sm">{property.bedrooms} bed{property.bedrooms !== 1 ? 's' : ''}</span>
          </div>
          {property.bathrooms && (
            <div className="flex items-center gap-1">
              <Bath size={18} />
              <span className="text-sm">{property.bathrooms} bath{property.bathrooms !== 1 ? 's' : ''}</span>
            </div>
          )}
          <div className="text-sm bg-slate-100 px-3 py-1 rounded-full">
            {property.propertyType}
          </div>
        </div>

        <a href={`#property/${property.id}`}>
          <Button variant="primary" size="sm" className="w-full">
            View Details
          </Button>
        </a>
      </div>
    </div>
  );
}
