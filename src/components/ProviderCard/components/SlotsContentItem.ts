import styled from 'styled-components';
import ContentItem from './ContentItem';

const SlotsContentItem = styled(ContentItem)`
  padding: 0 4px; // because of inner margins between slots
  display: flex;
`;

export default SlotsContentItem;
