import forntRoutes from '/imports/ui/front/routes';
import adminRoutes from '/imports/ui/admin/routes';

const appRoutes = [
  ...adminRoutes,
  ...forntRoutes,
];

export default appRoutes;
