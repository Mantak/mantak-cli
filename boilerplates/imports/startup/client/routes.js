import viewsRoutes from '/imports/ui/views/routes';
import adminRoutes from '/imports/ui/admin/routes';

const appRoutes = [
  ...adminRoutes,
  ...viewsRoutes,
];

export default appRoutes;
