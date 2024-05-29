// // import { client, dmmf } from './config.js';
// import { useEnvironmentVariableToDisableActions } from '../features/useEnvironmentVariableToDisableActions.js';
// import { menu } from '../index.js';
// import { ResourceFunction } from '../types/index.js';

// export const UsersResource: ResourceFunction<{
//   model: typeof dmmf.modelMap.Post;
//   client: typeof client;
// }> = () => ({
//   resource: {
//     model: dmmf.modelMap.Users,
//     client,
//   },
//   features: [useEnvironmentVariableToDisableActions()],
//   options: {
//     navigation: menu.prisma,
//     properties: {
//       content: { type: 'richtext' },
//       someJson: { type: 'mixed', isArray: true },
//       'someJson.number': { type: 'number' },
//       'someJson.string': { type: 'string' },
//       'someJson.boolean': { type: 'boolean' },
//       'someJson.date': { type: 'datetime' },
//     },
//   },
// });
