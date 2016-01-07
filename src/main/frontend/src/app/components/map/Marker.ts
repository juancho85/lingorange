export interface Marker {
    map: any;
    lat: number;
    lng: number;
    label?: string;
    content?: string;
    position?: any;
    setMap?: (any) => void;
}