import { Text } from 'react-native';
import FontTypes from '../../enumsCategories/FontTypes';

export default function AppText({ style, ...props }) {
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: FontTypes.SORA,
        },
        style,
      ]}
    />
  );
}