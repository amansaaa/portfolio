import { Bullet, BulletList, SubBullet, SubList } from "@/components/Bullets";
import UnderlineLink from "@/components/UnderlineLink";

/**
 * about page — edit the bullets below.
 * <Bullet> = top-level ◆ item, <SubList>/<SubBullet> = indented ↳ items.
 */
export default function Home() {
  return (
    <BulletList>
      <Bullet>
        Computer Engineering{" "}
        <UnderlineLink href="https://www.ece.utoronto.ca/" external className="ml-1 font-normal">
          University of Toronto
        </UnderlineLink>
      </Bullet>

      <Bullet>
        <em className="font-normal italic text-stone-700 dark:text-stone-300">
          what i&apos;ve been building:
        </em>
        <SubList>
          <SubBullet>
            created{" "}
            <UnderlineLink href="https://example.com" external className="font-normal">
              Euphoric Posters 
            </UnderlineLink>{" "}
            ($5K+ in revenue, 200+ orders, 40K+ session visits)
          </SubBullet>

           <SubBullet>
            shipped {" "}
            <UnderlineLink href="https://example.com" external className="font-normal">
              fantano
            </UnderlineLink>{" "}
            in &lt; 2 days to 50+ users
          </SubBullet>

                   
          <SubBullet>
            built {" "}
            <UnderlineLink href="https://vvisualize.app/" external className="font-normal">
              visualize
            </UnderlineLink>{" "}
              implementing an agent pipeline to compose visualizations
          </SubBullet>

        </SubList>
      </Bullet>

      <Bullet>
        <em className="font-normal italic text-stone-700 dark:text-stone-300">previously:</em>
        <SubList>
          <SubBullet>
            creator {" "} 
            <UnderlineLink href="https://www.tiktok.com/@amanssa_" external className="font-normal">
              TikTok
            </UnderlineLink>{" "}
            (140K+ followers, 4M+ likes, and 20M+ views)
          </SubBullet>

          <SubBullet>
          competitive fortnite (2nd, 8th, 16th, and more across NA tournaments)
          </SubBullet>
        </SubList>
      </Bullet>
    </BulletList>
  );
}
