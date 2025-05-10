export default function Facility(){
    return(
    <>
<div className="px-6 mt-32 text-[18px] md:text-[20px]">
  <h1 className="text-center text-[32px] md:text-[48px] font-bold mb-16">
    FACILITIES THAT WE PROVIDE
  </h1>

  {/* Facilities Grid */}
  {/* Facilities Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 max-w-6xl mx-auto">
  <ul className="space-y-8 list-disc list-inside">
    <li>Certified Coaches</li>
    <li>Dedicated Indoor Training Area</li>
    <li>Technical & Strength Training Equipments</li>
    <li>Custom Designed Functional Training System</li>
    <li>Spacious Area to Practice</li>
  </ul>
  <ul className="space-y-8 list-disc list-inside">
    <li>Vanity Area</li>
    <li>Unlimited Access to Group Activities</li>
    <li>Fitness Assessment & Testing (Regular Belt Grade Tracking)</li>
    <li>Exercise Programming</li>
    <li>Unlimited Free Diet Plans</li>
  </ul>
</div>
</div>
</>
);
}