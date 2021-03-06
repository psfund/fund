import React, { useEffect } from 'react';
import Head from 'next/head';
import {
  Banner,
  SegmentedSection,
  FeatureSection,
  SupportSection,
} from 'src/components/sections';
import { GeneralLayout } from 'src/components/layouts';
import useLocalization from 'src/lib/localization/useLocalization';

const Principles = () => {
  const { t } = useLocalization();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>{ t('principles_header_title') }</title>
      </Head>
      <GeneralLayout>
        <Banner
          title="principles_splash_title"
          subtitle="principles_splash_subtitle"
          content="principles_splash_content"
          imgSrc="/assets/principles-logo.png"
        />
        <FeatureSection
          title="principles_sufficiency_title"
          content="principles_sufficiency_content"
          imgSrc="/assets/principles-1.png"
          flipped
          grayBg
        />
        <FeatureSection
          title="principles_cooperativism_title"
          content="principles_cooperativism_content"
          imgSrc="/assets/principles-2.png"
        />
        <FeatureSection
          title="principles_transparency_title"
          content="principles_transparency_content"
          imgSrc="/assets/principles-3.png"
          flipped
          grayBg
        />
      </GeneralLayout>
    </>
  )
};

export default Principles;
