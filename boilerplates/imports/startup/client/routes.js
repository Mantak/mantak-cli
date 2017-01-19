import forntRoutes from '/imports/ui/front/routes';
import adminRoutes from '/imports/ui/admin/routes';
import commonsRoutes from '/imports/ui/commons/routes';

const appRoutes = [
  ...forntRoutes,
  ...adminRoutes,
  ...commonsRoutes,
];

export default appRoutes;
