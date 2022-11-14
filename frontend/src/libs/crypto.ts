export const genSha1 = async (data: string): Promise<string> => {
  const str2buf = (src: string) => {
    const buffer = Buffer.alloc(src.length);
    buffer.write(src);
    return buffer;
  };

  const hash = await crypto.subtle.digest('SHA-1', str2buf(data));
  const arrUint8 = new Uint8Array(hash);
  const arr: number[] = [];

  for (let i = 0; i < arrUint8.byteLength; i++) {
    arr[i] = arrUint8[i];
  }

  const result: string = await String.fromCharCode.apply(null, arr);

  return result;
};
