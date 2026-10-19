
import { useRef, useState } from "react";
import html2pdf from "html2pdf.js";

import "./ResumePreview.css";

import type { ResumeData } from "../../../../pages/Resume/Resume";

type ResumePreviewProps = {
  data: ResumeData;
};

export function ResumePreview({ data }: ResumePreviewProps) {
  const paperRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const professionalLinks = [
    data.linkedin,
    data.github,
    data.portfolio,
  ].filter(Boolean);

  async function handleDownloadPDF() {
    if (!paperRef.current || isDownloading) return;

    setIsDownloading(true);

    try {
      const fileName =
        (data.fullName.trim() || "curriculo")
          .replace(/[<>:"/\\|?*]/g, "")
          .replace(/\s+/g, "_") + ".pdf";

      const options = {
        margin: [10, 10, 10, 10] as [number, number, number, number],
        filename: fileName,
        image: {
          type: "jpeg" as const,
          quality: 0.98,
        },
        html2canvas: {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff",
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait" as const,
        },
        pagebreak: {
          mode: ["css", "legacy"],
        },
      };

      await html2pdf().set(options).from(paperRef.current).save();
    } catch (error) {
      console.error("Erro ao gerar o PDF:", error);
      window.alert("Não foi possível gerar o PDF. Tente novamente.");
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <aside className="resume-preview">
      <div className="resume-preview__header">
        <span>PRÉVIA DO CURRÍCULO</span>
      </div>

      <div className="resume-preview__paper" ref={paperRef}>
        <header className="resume-preview__person">
          <h2>{data.fullName || "Seu nome"}</h2>

          <div className="resume-preview__contact">
            {data.email && <span>{data.email}</span>}
            {data.phone && <span>{data.phone}</span>}
            {data.city && <span>{data.city}</span>}
          </div>

          {professionalLinks.length > 0 && (
            <div className="resume-preview__links">
              {data.linkedin && <span>{data.linkedin}</span>}
              {data.github && <span>{data.github}</span>}
              {data.portfolio && <span>{data.portfolio}</span>}
            </div>
          )}
        </header>

        <div className="resume-preview__divider" />

        <section className="resume-preview__section">
          <h3>PERFIL</h3>
          <p>
            {data.professionalSummary ||
              "Seu resumo profissional aparecerá aqui após gerar o currículo."}
          </p>
        </section>

        <section className="resume-preview__section">
          <h3>FORMAÇÃO</h3>

          {data.educations.length > 0 ? (
            <div className="resume-preview__educations">
              {data.educations.map((education) => (
                <article
                  className="resume-preview__education"
                  key={education.id}
                >
                  <strong>{education.course}</strong>
                  <span>{education.institution}</span>

                  {(education.status || education.year) && (
                    <small>
                      {education.status}
                      {education.status && education.year && " • "}
                      {education.year}
                    </small>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <p>Sua formação acadêmica aparecerá aqui.</p>
          )}
        </section>

        <section className="resume-preview__section">
          <h3>HABILIDADES</h3>

          {data.skills.length > 0 ? (
            <p className="resume-preview__skills">
              {data.skills.join(" • ")}
            </p>
          ) : (
            <p>Suas principais habilidades aparecerão aqui.</p>
          )}
        </section>

        {data.projects.length > 0 && (
          <section className="resume-preview__section">
            <h3>PROJETOS</h3>

            <div className="resume-preview__projects">
              {data.projects.map((project) => (
                <article
                  className="resume-preview__project"
                  key={project.id}
                >
                  <strong>{project.name}</strong>

                  {project.description && <p>{project.description}</p>}
                  {project.technologies && <span>{project.technologies}</span>}
                  {project.link && <small>{project.link}</small>}
                </article>
              ))}
            </div>
          </section>
        )}

        {data.courses.length > 0 && (
          <section className="resume-preview__section">
            <h3>CURSOS E CERTIFICADOS</h3>

            <div className="resume-preview__courses">
              {data.courses.map((course) => (
                <article
                  className="resume-preview__course"
                  key={course.id}
                >
                  <strong>{course.name}</strong>
                  {course.institution && <span>{course.institution}</span>}
                  {course.year && <small>{course.year}</small>}
                  {course.link && <small>{course.link}</small>}
                </article>
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="resume-preview__actions">
        <span>Currículo pronto para salvar ou compartilhar.</span>

        <button
          type="button"
          className="resume-preview__download"
          onClick={handleDownloadPDF}
          disabled={isDownloading}
        >
          {isDownloading ? (
            "Gerando PDF..."
          ) : (
            <>
              <span aria-hidden="true">↓</span>
              Baixar currículo em PDF
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
