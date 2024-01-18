import { currentTimeWithoutDateInIso } from '@/app/lib/utils';

export default function Basic({ label }: { label: string }) {
  return (
    <div className="m-8">
      <label>{label}</label>
      <p className="text-3xl">{currentTimeWithoutDateInIso()}</p>
    </div>
  );
}