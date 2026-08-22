export function getCalendlyUrl(): string {
	const base = import.meta.env.PUBLIC_CALENDLY_URL ?? 'https://calendly.com/tu-usuario/consulta-legal';
	const params = new URLSearchParams({
		locale: 'es',
		hide_gdpr_banner: '1',
		primary_color: 'c8a24a',
		text_color: 'f4eee0',
		background_color: '0a0908',
	});
	return `${base}${base.includes('?') ? '&' : '?'}${params.toString()}`;
}
