import {Box} from "../themeComponents/Box";
import Banner from "../banner/Banner";
import CompanyCallouts from "../companyCallouts/CompanyCallouts";
import FeaturedNewsList from "../../pages/news/FeaturedNewsList";
import FeaturedSolutionList from "../../pages/solutions/FeaturedSolutionList";
import TopNav from "../navigation/TopNav";

export const MDX_SHORTCODES = {
  Banner,
  FeaturedSolutionList,
  FeaturedNewsList,
  CompanyCallouts,
  Box,
  TopNav,
};

/**
 * Determines if a given `to` address is local or not.
 * @param {string} to The address to navigate to.
 * @returns {boolean} True if the address is local.
 */
export function isLocalTo(to: string | number): boolean {
  if (typeof to !== "string") {
    throw new Error(`"to" is not a string.`);
  }

  return !(
    to.startsWith("#") ||
    to.startsWith("http") ||
    to.startsWith("tel") ||
    to.startsWith("mailto") ||
    to.startsWith("//")
  );
}
