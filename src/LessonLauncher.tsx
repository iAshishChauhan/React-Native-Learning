import React, { ComponentType } from 'react';
import { Pressable, SectionList, StyleSheet, Text, View } from 'react-native';
import { NavigationIndependentTree } from '@react-navigation/core';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import StackNavigationApp from '../StackNavigationApp';
import DrawerApp from '../DrawerApp';
import TabbarApp from '../TabbarApp';
import TopTabNavigationApp from '../TopTabNavigationApp';

import First from './components/First';
import JSX from './components/JSX';
import OnPress from './components/OnPress';
import UseStateHook from './components/UseStateHook';
import Props from './components/Props';
import InputText from './components/InputText';
import Styling from './components/Styling';
import FlatListScreen from './components/FlatListScreen';
import SectionListScreen from './components/SectionListScreen';
import LoginForm from './components/LoginForm';
import ContactListScreen from './screens/contact/ContactListScreen';
import Grid from './components/Grid';
import ClassComponents from './components/ClassComponents';
import UseEffectHook from './components/UseEffectHook';
import UseEffectHookUpdatingPhase from './components/UseEffectHookUpdatingPhase';
import UseEffectHookUnmountingPhase from './components/UseEffectHookUnmountingPhase';
import StyleWithButton from './components/StyleWithButton';
import Loader from './components/Loader';
import StatusBarExample from './components/StatusBarExample';
import UseRefHook from './components/UseRefHook';
import ModalDialogBox from './components/ModalDialogBox';
import AlertExample from './components/AlertExample';
import GET_API from './components/GET_API';
import POST_API from './components/POST_API';
import PlatformExample from './components/PlatformExample';
import Search from './components/Search';

type Lesson = {
  title: string;
  component: ComponentType;
  independentNavigation?: boolean;
};

type LessonSection = {
  title: string;
  data: Lesson[];
};

const ClassComponentExample = () => <ClassComponents age={30} />;

const lessonSections: LessonSection[] = [
  {
    title: 'Basics',
    data: [
      { title: 'First Component', component: First },
      { title: 'JSX', component: JSX },
      { title: 'Button Press', component: OnPress },
      { title: 'Props', component: Props },
      { title: 'Text Input', component: InputText },
      { title: 'Styling', component: Styling },
      { title: 'Touchable Styling', component: StyleWithButton },
      { title: 'Platform', component: PlatformExample },
    ],
  },
  {
    title: 'State And Lifecycle',
    data: [
      { title: 'useState', component: UseStateHook },
      { title: 'Class Component', component: ClassComponentExample },
      { title: 'useEffect', component: UseEffectHook },
      { title: 'useEffect Updating', component: UseEffectHookUpdatingPhase },
      { title: 'useEffect Cleanup', component: UseEffectHookUnmountingPhase },
      { title: 'useRef', component: UseRefHook },
    ],
  },
  {
    title: 'Lists And UI',
    data: [
      { title: 'FlatList', component: FlatListScreen },
      { title: 'SectionList', component: SectionListScreen },
      { title: 'Contact List', component: ContactListScreen },
      { title: 'Grid', component: Grid },
      { title: 'Search', component: Search },
      { title: 'Login Form', component: LoginForm },
      { title: 'Loader', component: Loader },
      { title: 'Status Bar', component: StatusBarExample },
      { title: 'Modal', component: ModalDialogBox },
      { title: 'Alert', component: AlertExample },
    ],
  },
  {
    title: 'Networking',
    data: [
      { title: 'GET API', component: GET_API },
      { title: 'POST API', component: POST_API },
    ],
  },
  {
    title: 'Navigation',
    data: [
      {
        title: 'Stack Navigation',
        component: StackNavigationApp,
        independentNavigation: true,
      },
      {
        title: 'Bottom Tabs',
        component: TabbarApp,
        independentNavigation: true,
      },
      { title: 'Drawer', component: DrawerApp, independentNavigation: true },
      {
        title: 'Top Tabs',
        component: TopTabNavigationApp,
        independentNavigation: true,
      },
    ],
  },
];

type LessonStackParamList = {
  LessonHome: undefined;
  [param: string]: undefined;
};

type LessonHomeScreenProps = NativeStackScreenProps<
  LessonStackParamList,
  'LessonHome'
>;

const Stack = createNativeStackNavigator<LessonStackParamList>();
const lessons = lessonSections.flatMap(section => section.data);

const LessonHomeScreen = ({ navigation }: LessonHomeScreenProps) => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={lessonSections}
        keyExtractor={item => item.title}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionTitle}>{section.title}</Text>
        )}
        renderItem={({ item }) => (
          <Pressable
            style={styles.lessonRow}
            onPress={() => navigation.push(item.title)}
          >
            <Text style={styles.lessonTitle}>{item.title}</Text>
            <Text style={styles.chevron}>{'>'}</Text>
          </Pressable>
        )}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <Text style={styles.title}>React Native Lessons</Text>
            <Text style={styles.subtitle}>
              Select any example and check the code for the same.
            </Text>
          </View>
        }
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
};

const getLessonScreen = (lesson: Lesson) => {
  const LessonComponent = lesson.component;

  return function LessonScreen() {
    const content = (
      <View style={styles.lessonContainer}>
        <LessonComponent />
      </View>
    );

    if (lesson.independentNavigation) {
      return <NavigationIndependentTree>{content}</NavigationIndependentTree>;
    }

    return content;
  };
};

const LessonLauncher = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            headerTintColor: '#111827',
            contentStyle: styles.container,
          }}
        >
          <Stack.Screen
            name="LessonHome"
            component={LessonHomeScreen}
            options={{ title: 'React Native Lessons' }}
          />
          {lessons.map(lesson => (
            <Stack.Screen
              key={lesson.title}
              name={lesson.title}
              component={getLessonScreen(lesson)}
              options={{ title: lesson.title }}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  listContent: {
    padding: 16,
    paddingBottom: 32,
  },
  listHeader: {
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitle: {
    marginTop: 6,
    fontSize: 15,
    color: '#4b5563',
  },
  sectionTitle: {
    marginTop: 18,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#374151',
  },
  lessonRow: {
    minHeight: 52,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    paddingHorizontal: 14,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  lessonTitle: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },
  chevron: {
    fontSize: 24,
    color: '#6b7280',
  },
  header: {
    backgroundColor: '#ffffff',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#111827',
  },
  lessonContainer: {
    flex: 1,
  },
});

export default LessonLauncher;
