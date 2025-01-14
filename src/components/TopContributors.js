import React from 'react'
import styled from 'styled-components'
import { Box, GU, IdentityBadge, textStyle } from '@commonsswarm/ui'

const TopContributors = ({ contributors = [] }) => {
  return (
    <Box heading="Top Contributors">
      {contributors.map(({ account, formattedTotalValue }) => (
        <Contributor key={account}>
          <IdentityBadge entity={account} />
          <div
            css={`
              ${textStyle('body3')}
              margin-left: ${3 * GU}px;
            `}
          >
            {formattedTotalValue}
          </div>
        </Contributor>
      ))}
    </Box>
  )
}

const Contributor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${2 * GU}px;
`

export default TopContributors
