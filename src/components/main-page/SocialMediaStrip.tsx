import { Icon } from "@iconify/react";
import { SocialLinks } from "@/types/types";

type Props = {
  socialLinks: SocialLinks;
};

const SocialMediaStrip = ({ socialLinks }: Props) => {
  const platforms = [
    {
      label: "Facebook",
      href: socialLinks?.facebook,
      icon: "mdi:facebook",
      bgClass: "bg-[#1877F2]",
    },
    {
      label: "YouTube",
      href: socialLinks?.youtube,
      icon: "mdi:youtube",
      bgClass: "bg-[#FF0000]",
    },
    {
      label: "Instagram",
      href: socialLinks?.instagram,
      icon: "mdi:instagram",
      bgClass: "bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    },
    {
      label: "TikTok",
      href: socialLinks?.tiktok,
      icon: "ic:baseline-tiktok",
      bgClass: "bg-[#111111]",
    },
  ].filter((platform) => Boolean(platform.href));

  if (platforms.length === 0) {
    return null;
  }

  return (
    <section className="relative z-20 bg-dark-purple -mt-px -mb-px md:mt-0 md:mb-0 pt-5 md:pt-6 pb-6 md:pb-2">
      <div className="w-90% max-w-1560 mx-auto">
        <div className="mx-auto w-full lg:max-w-[980px] rounded-[28px] border border-transparent md:border-[#C9CDF6] bg-[#DDE1FF] px-5 py-5 md:px-7 md:py-6 shadow-[0_12px_30px_rgba(44,46,128,0.2)]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 md:gap-5">
            <div className="text-center lg:text-left lg:max-w-[320px]">
              <p className="text-xs md:text-sm uppercase tracking-[0.18em] text-[#5E63A8]">Blijf verbonden</p>
              <h2 className="text-[24px] md:text-[28px] lg:text-[32px] leading-tight font-semibold text-dark-purple">
                Volg ons op social media
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3 w-full lg:w-auto lg:flex lg:flex-wrap lg:justify-end">
              {platforms.map((platform) => (
                <a
                  key={platform.label}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-[#D4D9FF] px-3 py-2.5 md:px-4 md:py-3 bg-white/85 hover:bg-white transition-all duration-200 w-full sm:w-auto"
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-white ${platform.bgClass}`}
                    >
                      <Icon icon={platform.icon} width="18" height="18" />
                    </span>
                    <span className="text-sm md:text-base font-semibold text-dark-purple">
                      {platform.label}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaStrip;
