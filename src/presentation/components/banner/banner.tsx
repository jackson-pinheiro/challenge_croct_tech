import { Slot } from "@croct/plug-react";
import { SlotContent } from "@croct/plug/fetch";
import "./style.css";

type SlotProps = SlotContent<"home-banner">;

const defaultContent: SlotProps = {
  title: "Título de exemplo",
  subtitle: "Subtítulo",
  cta: {
    label: "Saiba mais",
    link: "https://croct.link/demo",
  },
};

const initialContent: SlotProps = {
  ...defaultContent,
};

interface BannerProps {
  cacheKey?: string;
}

function Banner({ cacheKey }: BannerProps) {
  return (
    <Slot
      id="home-banner"
      initial={initialContent}
      fallback={defaultContent}
      cacheKey={cacheKey}
    >
      {({ title, subtitle, cta }: SlotProps) => (
        <div className="banner">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <a href={cta.link} className="button">
            {cta.label}
          </a>
        </div>
      )}
    </Slot>
  );
}

export default Banner;
