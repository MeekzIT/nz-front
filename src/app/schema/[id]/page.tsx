import ProjectDetailsPags from '@/pageComponents/ProjectsPage/ProjectDetails/ProjectDetails';
import SchemaPage from '@/pageComponents/Schema/Schema';

export default async function ProjectsDetails({ params }: any) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  return <SchemaPage id={id} />;
}
