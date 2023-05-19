import {
  Keyboard,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import Icon from '@expo/vector-icons/Feather'

import NLWLogo from '../src/assets/nlw-spacetime.svg'
import { Link } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useState } from 'react'

export default function NewMemory() {
  const { bottom, top } = useSafeAreaInsets()

  const [isPublic, setIsPublic] = useState(false)

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView
        className="flex-1 px-8"
        contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
      >
        <View className="mt-4 flex-row items-center justify-between">
          <NLWLogo />

          <Link href="/memories" asChild>
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500">
              <Icon name="arrow-left" size={16} color="#FFFFFF" />
            </TouchableOpacity>
          </Link>
        </View>

        <View className="mt-6 space-y-6">
          <View className="flex-row items-center gap-2">
            <Switch
              value={isPublic}
              onValueChange={setIsPublic}
              thumbColor={isPublic ? '#9b79ea' : '#9e9ea0'}
              trackColor={{ false: '#767577', true: '#372568' }}
            />
            <Text className="font-body text-base text-gray-200">
              Tornar memória pública
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            className="h-32 items-center justify-center rounded-lg border border-dashed border-gray-500 bg-black/20"
          >
            <View className="flex-row items-center gap-2">
              <Icon name="image" color="#FFF" size={16} />
              <Text className="font-body text-sm text-gray-200">
                Adicionar foto ou video de capa
              </Text>
            </View>
          </TouchableOpacity>

          <TextInput
            multiline
            className="font-lg p-0 font-body text-lg text-gray-50"
            placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
            placeholderTextColor="#56565A"
            cursorColor="#9b79ea"
            selectionColor="#9b79ea"
            keyboardAppearance="dark"
          />

          <TouchableOpacity
            className="items-center self-end rounded-full bg-green-500 px-5 py-2"
            activeOpacity={0.7}
          >
            <Text className="font-alt text-sm uppercase text-black">
              Salvar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}
