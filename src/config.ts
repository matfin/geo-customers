interface IAppConfig {
  baseUrl: string,
}

const config: IAppConfig = {
  baseUrl: process.env.BASE_URL || 'https://s3.amazonaws.com'
} 

export default config;