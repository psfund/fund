import React, { useEffect } from 'react';
import Head from 'next/head';
import { Typography } from 'antd';
import {
  Banner,
  SegmentedSection,
  FeatureSection,
  SupportSection,
} from 'src/components/sections';
import { GeneralLayout } from 'src/components/layouts';
import useLocalization from 'src/lib/localization/useLocalization';

const { Title } = Typography;

const Strategy = () => {
  const { t } = useLocalization();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>{ t('strategy_header_title') }</title>
      </Head>
      <GeneralLayout>
        <Banner
          title="strategy_splash_title"
          subtitle="strategy_splash_subtitle"
          content="strategy_splash_content"
          imgSrc="/assets/strategy-logo.png"
        />
        <FeatureSection
          title="strategy_step1_title"
          content="strategy_step1_content"
          imgSrc="/assets/strategy-1.png"
          flipped
          grayBg
        />
        <FeatureSection
          title="strategy_step2_title"
          content="strategy_step2_content"
          imgSrc="/assets/strategy-2.png"
        />
        <FeatureSection
          title="strategy_step3_title"
          content="strategy_step3_content"
          imgSrc="/assets/strategy-3.png"
          flipped
          grayBg
        />
      </GeneralLayout>
    </>
  )
};

export default Strategy;
