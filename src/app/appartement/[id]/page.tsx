import { AppartamentPage } from '@/pageComponents/Appartament/AppartamentPage';

export default async function ProjectsDetails({ params }: any) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  return <AppartamentPage id={id} />;
}
