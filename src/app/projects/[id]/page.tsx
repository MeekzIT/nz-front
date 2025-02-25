import ProjectDetailsPags from '@/pageComponents/ProjectsPage/ProjectDetails/ProjectDetails';

export default async function ProjectsDetails({ params }: any) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  return <ProjectDetailsPags id={id} />;
}
