import { getLegalContents } from "@/lib/legal-content";
import type { LegalContentType } from "@/types/legal-content";

type LegalContentPageProps = {
  type: LegalContentType;
  pageTitle: string;
  description: string;
};

export async function LegalContentPage({
  type,
  pageTitle,
  description,
}: LegalContentPageProps) {
  try {
    const contents = await getLegalContents(type);

    if (contents.length === 0) {
      return (
        <section className="empty-state">
          <h1>{pageTitle}</h1>
          <p>No published content is available right now. Please check again later.</p>
        </section>
      );
    }

    return (
      <article className="legal-card">
        <section className="legal-hero">
          <span className="eyebrow">Legal Content</span>
          <h1>{pageTitle}</h1>
          <p>{description}</p>

          <div className="meta-row">
            <span className="meta-pill">Type: {type}</span>
            <span className="meta-pill">Items: {contents.length}</span>
          </div>
        </section>

        <div className="legal-list">
          {contents.map((content) => (
            <section key={content._id} className="legal-entry">
              <div className="legal-entry-header">
                <h2>{content.title || pageTitle}</h2>
                <span className="meta-pill">
                  Updated:{" "}
                  {new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
                    new Date(content.updatedAt)
                  )}
                </span>
              </div>

              <section
                className="legal-body"
                dangerouslySetInnerHTML={{ __html: content.contentHtml }}
              />
            </section>
          ))}
        </div>
      </article>
    );
  } catch {
    return (
      <section className="error-state">
        <h1>{pageTitle}</h1>
        <p>
          The legal content service could not be reached right now. Please verify the API is
          available and try again.
        </p>
      </section>
    );
  }
}
