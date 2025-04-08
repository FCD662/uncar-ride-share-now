
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Car, MapPin, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface CarFeature {
  name: string;
}

interface CarCardProps {
  id: string;
  name: string;
  price: number;
  city: string;
  year: number;
  carClass: string;
  bodyType: string;
  engineType: string;
  seats: number;
  features: CarFeature[];
  image: string;
  discountPercentage?: number;
}

const CarCard = ({
  id,
  name,
  price,
  city,
  year,
  carClass,
  bodyType,
  engineType,
  seats,
  features,
  image,
  discountPercentage
}: CarCardProps) => {
  return (
    <Link to={`/cars/${id}`}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
        <div className="relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          {discountPercentage && (
            <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {discountPercentage}% OFF
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium text-lg truncate flex-1">{name}</h3>
            <p className="text-uncar-500 font-bold">${price}<span className="text-xs text-gray-500">/day</span></p>
          </div>
          
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{city}</span>
            <span className="mx-2">•</span>
            <Calendar className="h-4 w-4 mr-1" />
            <span>{year}</span>
          </div>
          
          <div className="mb-3">
            <div className="flex flex-wrap gap-1 text-xs">
              <Badge variant="secondary">{carClass}</Badge>
              <Badge variant="secondary">{bodyType}</Badge>
              <Badge variant="outline" className={
                engineType === 'Electric' ? 'bg-green-50 text-green-700 border-green-200' :
                engineType === 'Hybrid' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                'bg-gray-50 text-gray-700 border-gray-200'
              }>
                {engineType}
              </Badge>
              <Badge variant="outline" className="flex items-center">
                <Users className="h-3 w-3 mr-1" />
                {seats}
              </Badge>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1">
            {features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline" className="bg-uncar-50 text-uncar-700 border-uncar-100">
                {feature.name}
              </Badge>
            ))}
            {features.length > 3 && (
              <Badge variant="outline" className="bg-gray-50 text-gray-500">
                +{features.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CarCard;
