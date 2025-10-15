import Image from 'next/image';

interface RightSectionProps {
  imageSrc: string;
  text: string;
}

export const RightSection = ({ imageSrc, text }: RightSectionProps) => {
  return (
    <div
      className="flex h-[600px] flex-col items-center justify-center bg-[#163B82] bg-cover bg-center bg-no-repeat px-6 py-10 text-white sm:h-[650px] md:h-full"
      style={{
        backgroundImage: "url('/form-bg.png')",
      }}
    >
      <Image
        src={imageSrc}
        alt="Illustration"
        width={320}
        height={260}
        className="mb-6 object-contain"
      />
      <p className="max-w-md text-center text-[15px] leading-relaxed font-[400]">
        {text}
      </p>
    </div>
  );
};
