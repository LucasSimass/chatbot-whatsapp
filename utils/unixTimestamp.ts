class UnixTimestamp {
  /**
   * (Unix TimeStamp) => dia/mes/ano
   */
  convertUnixTimestampToLittleEndian(UnixTimestamp: number): string{
    return (new Date(UnixTimestamp * 1000))
           .toLocaleString('pt-BR');
  }
}

export default UnixTimestamp;