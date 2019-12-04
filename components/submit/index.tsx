import React from 'react';
import Link from 'next/link';

import { Box, Button, Text } from '@blockstack/ui';

interface SuccessCardProps {
  isAppMiningEligible: boolean;
}

type SuccessCard = React.FC<SuccessCardProps>;

const SuccessCard: SuccessCard = ({ isAppMiningEligible }) => (
  <Box width="100%" textAlign="center" py={56}>
    <Box pb={6} width="100%">
      <Text as="h1" textStyle="display.large" color="ink" mx="auto" fontSize={5}>
        Submission received
      </Text>
    </Box>
    <Box mx="auto" maxWidth="560px">
      <Text display="block">
        Thank you for submitting your app to App.co! We will get back to you
        soon.
      </Text>
      {isAppMiningEligible && (
        <>
          <Text my={3} display="block">
            Because your app uses Blockstack authentication, you are eligible to
            participate in{' '}
            <Link href="/mining">
              <Text color="blue" fontWeight={500}>App Mining</Text>
            </Link>
            . To participate, you are required to submit your payment and tax
            details.
          </Text>
          <Link href={{ pathname: '/maker/apps' }} passHref>
            <Button mt={6}>Participate in App Mining</Button>
          </Link>
        </>
      )}
    </Box>
  </Box>
);

export default SuccessCard;
