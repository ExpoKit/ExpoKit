/* eslint-disable @typescript-eslint/no-require-imports -- Metro bundles images only through require() */
import { Asset } from 'expo-asset';
import { Platform, type ImageSourcePropType } from 'react-native';

// Demo photos bundled with the previews so they never depend on a placeholder host being up. Keyed by their
// Lorem Picsum id (the originals are on Unsplash, see credits.json). Copied demo code gets a picsum URL helper
// with the same signature instead (scripts/build-registry.mjs), so a pasted example still runs.
const PHOTOS: Record<number, number> = {
  64: require('./64.webp'),
  250: require('./250.webp'),
  292: require('./292.webp'),
  364: require('./364.webp'),
  397: require('./397.webp'),
  419: require('./419.webp'),
  425: require('./425.webp'),
  431: require('./431.webp'),
  452: require('./452.webp'),
  512: require('./512.webp'),
  646: require('./646.webp'),
  705: require('./705.webp'),
  766: require('./766.webp'),
  777: require('./777.webp'),
  791: require('./791.webp'),
  835: require('./835.webp'),
  947: require('./947.webp'),
  999: require('./999.webp'),
  1005: require('./1005.webp'),
  1011: require('./1011.webp'),
  1015: require('./1015.webp'),
  1016: require('./1016.webp'),
  1018: require('./1018.webp'),
  1023: require('./1023.webp'),
  1027: require('./1027.webp'),
  1035: require('./1035.webp'),
  1036: require('./1036.webp'),
  1040: require('./1040.webp'),
  1043: require('./1043.webp'),
  1051: require('./1051.webp'),
  1052: require('./1052.webp'),
  1057: require('./1057.webp'),
  1060: require('./1060.webp'),
  1062: require('./1062.webp'),
  1065: require('./1065.webp'),
  1067: require('./1067.webp'),
  1073: require('./1073.webp'),
  1081: require('./1081.webp'),
};
const BLURRED: Record<number, number> = {
  56: require('./56-blur.webp'),
  185: require('./185-blur.webp'),
  189: require('./189-blur.webp'),
  715: require('./715-blur.webp'),
  721: require('./721-blur.webp'),
  765: require('./765-blur.webp'),
  846: require('./846-blur.webp'),
  888: require('./888-blur.webp'),
};

function bundled(id: number, blur: boolean): number {
  const source = (blur ? BLURRED : PHOTOS)[id];
  if (source === undefined) throw new Error(`registry/_photos: no ${blur ? 'blurred ' : ''}photo ${id}`);
  return source;
}

/** A bundled demo photo. `w` / `h` only size the copied URL version; previews crop with `resizeMode`. */
export function photo(id: number, _w = 600, _h = 760, blur = false): ImageSourcePropType {
  const source = bundled(id, blur);
  // RN Web sizes a require()d image to its pixel size, overriding absoluteFill / cover; a bare uri fills its box as on native.
  return Platform.OS === 'web' ? { uri: Asset.fromModule(source).uri } : source;
}

/** The same photo as a URI string, for props that take only a URL. */
export const photoUri = (id: number, _w = 600, _h = 400) => Asset.fromModule(bundled(id, false)).uri;
