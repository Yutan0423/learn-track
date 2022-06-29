import React, { VFC } from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTailwind } from 'tailwind-rn/dist';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Title } from '../components/Title';
import { RootStackParamList, Tag } from '../types/types';
import { TagCard } from '../components/TagCard';
import { useGetTags } from '../hooks/useGetTags';

type Item = {
  item: Omit<Tag, 'createdAt'>;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TagList'>;
};

export const TagListScreen: VFC<Props> = ({ navigation }) => {
  const tw = useTailwind();
  const { tags, getErr, isLoading } = useGetTags();
  const tagsKeyExtractor = (item: Omit<Tag, 'createdAt'>) => item.id;
  const tagRenderItem = ({ item }: Item) => (
    <TagCard id={item.id} name={item.name} />
  );

  if (isLoading) {
    return (
      <SafeAreaView style={tw('flex-1 items-center justify-center')}>
        <ActivityIndicator size="large" color="gray" />
        {getErr !== '' && (
          <Text style={tw('text-red-500 my-3 font-semibold')}>{getErr}</Text>
        )}
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={tw('flex-1 bg-gray-100 items-center')}>
      <Title first="Tag" last="List" />
      <TouchableOpacity
        style={tw('mt-2')}
        onPress={() => navigation.navigate('CreateTag')}
      >
        <MaterialCommunityIcons name="tag-plus" size={40} color="#404b75" />
      </TouchableOpacity>
      <Text style={tw('text-gray-700 mt-2 mb-5')}>Add Tag</Text>
      <View>
        <FlatList
          data={tags}
          keyExtractor={tagsKeyExtractor}
          keyboardShouldPersistTaps="always"
          renderItem={tagRenderItem}
        />
      </View>
    </SafeAreaView>
  );
};
